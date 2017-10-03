import {Inject, Injectable} from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AppHttpService } from './app-http.service';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
    private messaging: firebase.messaging.Messaging;

    constructor (
        @Inject(FirebaseApp) private firebaseApp: firebase.app.App,
        private AppHttpService: AppHttpService
    ) {
        this.messaging = firebase.messaging(this.firebaseApp);
        this.messaging.requestPermission()
            .then(() => this.messaging.getToken())
            .then((token) => {
                let data = {
                    token: token
                };
                this.AppHttpService
                    .builder('notifications/registration')
                    .insert(data);
            })
    }
}
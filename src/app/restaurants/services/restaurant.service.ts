import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AppHttpService } from '../../app-http.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService extends AppHttpService {
    protected url: string;
    protected header: Headers;

    builder (resource: string = '') {
        return super.builder('restaurants' + resource);
    }

    getCep(cep: number) {
        let url = 'https://viacep.com.br/ws/' + cep + '/json/';
        return this.request().get(url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    upload(url: string, data: Object) {
        let observable = this.http.post(this.url + '/' + url, data, {headers: this.header})
        return this.toPromise(observable);
    }
}
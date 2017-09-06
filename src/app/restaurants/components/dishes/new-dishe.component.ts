import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';
import { AuthService } from '../../../user/services/auth.service';
import { DishesService } from '../../services/dishes.service';

@Component({
    selector: 'app-new-dishe',
    templateUrl: './new-dishe.component.html'
})
export class NewDisheComponent implements OnInit {
    
    dish: any = {};

    constructor(private router: Router,
        protected authService: AuthService,
        protected httpService: DishesService) {}

    ngOnInit () {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        jQuery('.modal').modal('open');

        this.authService.getUser()
        .then((res) => {
            this.dish.restaurant_id = res.restaurant.id;
        });
    }

    addFile(e) {
        this.dish.photo = e.target.files[0];
    }

    save(e) {
        e.preventDefault();

        if (!this.dish.photo) {
            window.Materialize.toast('Selecione uma foto antes', 3000, 'red')
            return;
        }

        let formdata = new FormData;
        formdata.append('photo', this.dish.photo);
        formdata.append('name', this.dish.name);
        formdata.append('description', this.dish.description);
        formdata.append('price', this.dish.price);
        formdata.append('restaurant_id', this.dish.restaurant_id);

        this.httpService.builder()
            .insert(formdata)
            .then(() => {
                this.httpService.eventEmitter.emit();
                jQuery(".modal").modal("close");
            })
    }
}
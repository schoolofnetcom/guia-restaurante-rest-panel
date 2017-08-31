import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { RestaurantService } from './restaurant.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    dragging: boolean = false;
    restaurant: any = {};
    address: any = {};

    constructor(
        protected appHttpService: AppHttpService,
        protected httpService: RestaurantService
    ) {}

    ngOnInit () {
        this.appHttpService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                this.httpService.builder()
                    .view(id)
                    .then((res) => {
                        this.restaurant = res;
                        this.address = res.address || {};
                        window.Materialize.updateTextFields();
                    });
            });
    }

    upload(e) {
        e.preventDefault();
        console.log(e.dataTransfer.files)
    }

    dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }

    searchCep() {
        let cep = this.address.cep || null;
        if (cep && cep.length === 8) {
            this.httpService.getCep(cep)
                .then((res) => {
                    this.address = {
                        cep: cep,
                        address: res.logradouro,
                        city: res.localidade,
                        neighborhood: res.bairro,
                        state: res.uf
                    }
                })
        }
    }

    save(e) {
        e.preventDefault();
        this.httpService.builder()
            .update(this.restaurant.id, this.restaurant)
            .then(() => {
                return this.httpService.builder('/' + this.restaurant.id + '/address')
                    .insert(this.address);
            })
            .then(() => {
                window.Materialize.toast('Salvo com sucesso!!!', 3000);
            })
    }
}
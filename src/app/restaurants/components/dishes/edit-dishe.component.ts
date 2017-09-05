import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { DishesService } from '../../services/dishes.service';

@Component({
    selector: 'app-edit-dishe',
    templateUrl: './edit-dishe.component.html'
})
export class EditDisheComponent implements OnInit {
    
    dish: any = {};

    constructor(private router: Router, private route: ActivatedRoute, protected httpService: DishesService) {}

    ngOnInit () {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        jQuery('.modal').modal('open');

        this.route.params.subscribe(params => {
            this.httpService.builder().view(params['id']).then(res => {
                this.dish = res;
                window.Materialize.updateTextFields();
            });
        });
    }

    addFile(e) {
        this.dish.photo = e.target.files[0];
    }

    save(e) {
        e.preventDefault();
        
        let formdata = this.dish;

        if (this.dish.photo) {
            formdata = new FormData;
            formdata.append('photo', this.dish.photo);
            formdata.append('name', this.dish.name);
            formdata.append('description', this.dish.description);
            formdata.append('price', this.dish.price);
            formdata.append('restaurant_id', this.dish.restaurant_id);
        }

        this.httpService.builder()
            .update(this.dish.id, formdata)
            .then(() => {
                this.httpService.eventEmitter.emit();
                jQuery(".modal").modal("close");
            })
    }
}
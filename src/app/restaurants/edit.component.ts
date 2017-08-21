import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    dragging: boolean = false;
    ngOnInit () {}

    upload(e) {
        e.preventDefault();
        console.log(e.dataTransfer.files)
    }

    dragover(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }
}
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.html',
    styleUrls: ['./create-order.css']
})
export class CreateOrderDialogComponent {

    title: string = '';
    description: string = '';

    constructor(private dialogRef: MatDialogRef<CreateOrderDialogComponent>) {}

    submit() {
        console.log(this.title);
        if (this.title !== '') {
            this.close();
        }
    }

    close() {
        this.dialogRef.close({
            title: this.title,
            description: this.description
        })
    }

    changeTitle(event: any) {
        this.title = event.target.value;
    }

    changeDescription(event: any) {
        this.description = event.target.value;
    }

}
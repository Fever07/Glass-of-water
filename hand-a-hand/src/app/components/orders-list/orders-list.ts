import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { ApiService } from "../../services/api-service";

@Component({
    selector: 'app-orders-list',
    templateUrl: 'orders-list.html',
    styleUrls: ['orders-list.css']
})
export class OrdersListComponent {

    @Input() orders: any[];
    @Input() empty: string;
    @Input() choosable: boolean = false;
    @Output() choose = new EventEmitter<any>();
    private chosenIndex: number = -1;

    constructor() {}    

    onPick(order) {
        const index = this.orders.indexOf(order);
        this.chosenIndex = this.chosenIndex === index ? -1 : index;
    }

    onChoose(order) {
        this.choose.emit(order);
    }
}
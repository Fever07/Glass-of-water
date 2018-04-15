import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ApiService } from "../../services/api-service";

@Component({
    selector: 'app-orders-list',
    templateUrl: 'orders-list.html',
    styleUrls: ['orders-list.css']
})
export class OrdersListComponent {

    @Input() orders: any[];
    @Input() empty: string;

    constructor() {}    

}
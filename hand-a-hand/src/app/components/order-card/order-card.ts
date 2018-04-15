import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'app-order-card',
    templateUrl: 'order-card.html',
    styleUrls: ['order-card.css']
})
export class OrderCardComponent {
    @Input() order: any;
}
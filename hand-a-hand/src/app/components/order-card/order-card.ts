import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-order-card',
    templateUrl: 'order-card.html',
    styleUrls: ['order-card.css']
})
export class OrderCardComponent {
    @Input() order: any;
    @Input() expand: boolean = false;
    @Input() buttonText: string;
    @Output() pick = new EventEmitter<any>();
    @Output() choose = new EventEmitter<any>();
}
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-side-menu',
    templateUrl: 'side-menu.html',
    styleUrls: ['side-menu.css']
})
export class SideMenuComponent {
    
    @Input() menuItems: any[] = []; 
    @Output() onChooseMenuItem = new EventEmitter<any>();
    
}
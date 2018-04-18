import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.html',
    styleUrls: ['header.css']
})
export class HeaderComponent {

    @Output() onMenuToggle = new EventEmitter<any>();
    imagepath = 'assets/images/glass.jpg';

    toggleMenu() {
        console.log(1);
    }
}
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.html',
    styleUrls: ['header.css']
})
export class HeaderComponent {

    @Output() onMenuToggle = new EventEmitter<any>();
    imagepath = 'assets/images/glass2.jpg';

    toggleMenu() {
        console.log(1);
    }
}
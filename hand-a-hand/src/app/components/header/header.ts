import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.html',
    styleUrls: ['header.css']
})
export class HeaderComponent {
    imagepath = 'assets/images/glass.jpg';

    toggleMenu() {
        console.log(1);
    }
}
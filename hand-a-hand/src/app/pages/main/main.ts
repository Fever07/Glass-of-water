import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
    templateUrl: 'main.html',
    styleUrls: ['main.css']
})
export class MainPage {

    @ViewChild(MatSidenav) sidenav: MatSidenav;

    onMenuToggle(event: any) {
        this.sidenav.toggle();
    }

    opened() {
        console.log(this.sidenav);
    }
}
import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'main.html',
    styleUrls: ['main.css']
})
export class MainPage {

    @ViewChild(MatSidenav) sidenav: MatSidenav;
    readonly menuItems = [
        {
            title: 'Orders',
            url: 'dashboard',
            enabled: true
        },
        {
            title: 'Profile',
            url: 'profile',
            enabled: true,
        },
        {
            title: 'Map',
            url: 'map',
            enabled: false
        }
    ];

    constructor(private router: Router) {}

    onMenuToggle(event: any) {
        this.sidenav.toggle();
    }

    chooseMenuItem(menuItem) {
        this.sidenav.close();
        this.router.navigate(['main/' + menuItem.url]);
    }
}
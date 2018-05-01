import { Component } from "@angular/core";
import { LoginService } from "../../services/login";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'profile.html',
    styleUrls: ['profile.css']
})
export class ProfilePage {
    
    private user: any = {};

    constructor(private loginService: LoginService, private router: Router) {
        this.user = loginService.getUser();
    }

    exit() {
        this.loginService.exit();
        this.router.navigate(['login']);
    }

}
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {}

    canActivate() {
        if (this.loginService.isAuthorized()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
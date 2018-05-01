import { Component, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "../../services/login";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})
export class LoginPage {

    constructor(private element: ElementRef, private loginService: LoginService, private router: Router) {}

    submit(loginForm: NgForm) {
        if (loginForm.valid) {
            const { username, password } = loginForm.value;
            this.loginService.authorize(username, password)
            .then(res => {
                console.log(res);
                this.router.navigate(['main/dashboard']);
            })
            .catch(err => {
                if (err.status === 401) {
                    alert('UNAUTHORIZED');
                }
            });
        }
    }
}
import { Component } from "@angular/core";

@Component({
    templateUrl: 'registration.html',
    styleUrls: ['registration.css']
})
export class RegistrationPage {
    submit(registrationForm: any) {
        console.log(registrationForm);
    }
}
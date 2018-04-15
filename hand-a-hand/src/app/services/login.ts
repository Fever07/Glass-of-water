import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    username: string;

    constructor(private constants: Constants, private http: Http) {}

    getUserName() {
        return this.username;
    }

    authorize(username: string, password: string) {
        return this.http.post(this.constants.get('apiUrl') + 'login', {
            username,
            password
        })
        .toPromise()
        .then(res => {
            const resp = res.json();
            this.username = resp.user.username;
            return resp;
        })
    }

}
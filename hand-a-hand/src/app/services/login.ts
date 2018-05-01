import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    private user: any;
    private localStorage: Storage;

    constructor(private constants: Constants, private http: Http) {
        this.localStorage = window.localStorage;
        this.getFromStorage();
    }

    isAuthorized() {
        return !!this.user;
    }

    getUserName() {
        return this.user.username;
    }

    getUser() {
        return this.user;
    }

    getFromStorage() {
        this.user = JSON.parse(this.localStorage.getItem('user'));
    }

    setToStorage() {
        this.localStorage.setItem('user', JSON.stringify(this.user));
    }

    authorize(username: string, password: string) {
        return this.http.post(this.constants.get('apiUrl') + 'login', {
            username,
            password
        })
        .toPromise()
        .then(res => {
            const resp = res.json();
            this.user = resp.user;
            this.setToStorage();
            return resp;
        })
    }

    exit() {
        this.user = null;
        this.localStorage.removeItem('user');
    }

}
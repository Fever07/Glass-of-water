import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    private userId: string;
    private username: string;
    private localStorage: Storage;

    constructor(private constants: Constants, private http: Http) {
        this.localStorage = window.localStorage;
        this.getFromStorage();
    }

    isAuthorized() {
        return this.userId && this.userId !== '';
    }

    getUserName() {
        return this.username;
    }

    getFromStorage() {
        const userId = this.localStorage.getItem('userId');
        const username = this.localStorage.getItem('username');
        if (userId) {
            this.userId = userId;
            this.username = username;
        }
    }

    setToStorage() {
        this.localStorage.setItem('userId', this.userId);
        this.localStorage.setItem('username', this.username);
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
            this.userId = resp.user.id;
            this.setToStorage();
            return resp;
        })
    }

}
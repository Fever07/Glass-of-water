import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Order } from "../common/interfaces/order";
import { LoginService } from "./login";

@Injectable()
export class ApiService {

    constructor(private constants: Constants, private http: Http, private loginService: LoginService) {}

    getOrders(user: any): Promise<Order[]> {
        return this.http.get(this.constants.get('apiUrl') + 'orders/list/?username=user2&password=123456&userId=' + user.id)
            .toPromise()
            .then(res => res.json());
    }

    createOrder(order: any): Promise<Order> {
        return this.http.post(this.constants.get('apiUrl') + 'orders/create', {
            ...order,
            author: {
                "id": this.loginService.getUser().id
            },
            createdAt: Date.now()
        })
        .toPromise()
        .then(res => res.json());
    }

    performOrder(order: any, user: any): Promise<any> {
        return this.http.post(this.constants.get('apiUrl') + 'users/perform', {
            order,
            user
        })
        .toPromise()
        .then(res => res.json());
    }

    getUserOrders(user: any): Promise<any> {
        return this.http.get(this.constants.get('apiUrl') + 'users/orders?userId=' + user.id)
        .toPromise()
        .then(res => res.json());
    }

    getPerformedOrders(user: any): Promise<any> {
        return this.http.get(this.constants.get('apiUrl') + 'users/performed?userId=' + user.id)
        .toPromise()
        .then(res => res.json());
    }

}
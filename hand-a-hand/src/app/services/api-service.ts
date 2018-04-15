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

    getOrders(): Promise<Order[]> {
        return this.http.get(this.constants.get('apiUrl') + 'orders/list/?username=user1&password=123456')
            .toPromise()
            .then(res => res.json());
    }

    createOrder(order: any): Promise<Order> {
        return this.http.post(this.constants.get('apiUrl') + 'orders/create', {
            ...order,
            creator: this.loginService.getUserName(),
            createdAt: Date.now()
        })
        .toPromise()
        .then(res => res.json());
    }

}
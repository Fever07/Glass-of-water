import { Component } from "@angular/core";
import { ApiService } from "../../services/api-service";
import { LoginService } from "../../services/login";
import { Order } from "../../common/interfaces/order";
import { MatDialog, MatDialogRef } from "@angular/material";
import { CreateOrderDialogComponent } from "../../components/create-order/create-order";

@Component({
    templateUrl: 'dashboard.html',
    styleUrls: ['dashboard.css']
})
export class DashboardPage {

    orders: Order[] = [];
    userOrders: Order[] = [];
    performOrders: Order[] = [];
    isLoading: boolean = false;

    constructor(private apiService: ApiService, private loginService: LoginService, private dialog: MatDialog) {
        this.isLoading = true;
        this.loadOrders();
    }

    sortOrders(orders: any[]) {
        return orders.sort((ord1, ord2) => {
            if (ord1.createdAt > ord2.createdAt) {
                return -1;
            }
            if (ord1.createdAt < ord2.createdAt) {
                return 1;
            }
            return 0;
        });
    }

    loadOrders() {
        Promise.all([
            this.apiService.getOrders(this.loginService.getUser()),
            this.apiService.getUserOrders(this.loginService.getUser()),
            this.apiService.getPerformedOrders(this.loginService.getUser())
        ])
        .then(arr => {
            console.log(arr);
            this.orders = this.sortOrders(arr[0]);
            this.userOrders = this.sortOrders(arr[1]);
            this.performOrders = this.sortOrders(arr[2]);
            this.isLoading = false
        });
    }

    createOrder() {
        const dialogRef: MatDialogRef<CreateOrderDialogComponent> = this.dialog.open(CreateOrderDialogComponent, {
            width: '55%',
            height: '300px'
        });
        dialogRef.afterClosed()
        .toPromise()
        .then(result => {
            if (result && result.submit) {
                this.apiService.createOrder(result.order)
                .then(res => {
                    this.loadOrders();
                });
            }
        });
    }

    onChoose(order) {
        console.log(order);
        this.apiService.performOrder(order, this.loginService.getUser())
        .then(res => {
            this.loadOrders();
        });
    }

    onMenuToggle(evt: any) {
        console.log(evt);
    }
    
}
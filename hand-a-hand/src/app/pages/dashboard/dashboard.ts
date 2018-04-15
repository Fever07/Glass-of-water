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

    orders: Order[];
    userOrders: Order[];
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
        this.apiService.getOrders()
        .then(orders => {
            this.orders = this.sortOrders(orders);
            this.userOrders = orders.filter(order => order.creator === this.loginService.getUserName());
            this.performOrders = [];
            this.isLoading = false
        });
    }

    createOrder() {
        const dialogRef: MatDialogRef<CreateOrderDialogComponent> = this.dialog.open(CreateOrderDialogComponent, {
            width: '55%',
            height: '300px'
        });
        dialogRef.afterClosed()
        .subscribe(order => {
            console.log(order);
            this.apiService.createOrder(order)
            .then(res => {
                console.log(res);
                this.loadOrders();
            });
        });
    }
    
}
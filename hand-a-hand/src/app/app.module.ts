import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardPage } from './pages/dashboard/dashboard';
import { AppRouting } from './app.routing';
import { HeaderComponent } from './components/header/header';
import { ApiService } from './services/api-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material';
import { OrdersListComponent } from './components/orders-list/orders-list';
import { OrderCardComponent } from './components/order-card/order-card';
import { Constants } from './services/constants';
import { Http, HttpModule } from '@angular/http';
import { LoginService } from './services/login';
import { CreateOrderDialogComponent } from './components/create-order/create-order';
import { LoginPage } from './pages/login/login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersListComponent,
    OrderCardComponent,
    DashboardPage,
    LoginPage,
    CreateOrderDialogComponent
  ],
  imports: [
    AppMaterialModule,
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ApiService,
    Constants,
    LoginService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateOrderDialogComponent
  ]
})
export class AppModule { }

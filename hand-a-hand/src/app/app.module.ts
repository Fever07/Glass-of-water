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
import { AuthGuard } from './services/auth.guard';
import { MainPage } from './pages/main/main';
import { ProfilePage } from './pages/profile/profile';
import { SideMenuComponent } from './components/side-menu/side-menu';
import { TempPage } from './pages/temp/temp';
import { RegistrationPage } from './pages/registration/registration';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersListComponent,
    OrderCardComponent,
    DashboardPage,
    LoginPage,
    CreateOrderDialogComponent,
    MainPage,
    ProfilePage,
    SideMenuComponent,
    TempPage,
    RegistrationPage
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
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateOrderDialogComponent
  ]
})
export class AppModule { }

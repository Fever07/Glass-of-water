import { Routes, RouterModule } from "@angular/router";
import { DashboardPage } from "./pages/dashboard/dashboard";
import { LoginPage } from "./pages/login/login";

const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'dashboard', component: DashboardPage },
    { path: '**', redirectTo: '/dashboard' }
 ];
 
export const AppRouting = RouterModule.forRoot(routes);

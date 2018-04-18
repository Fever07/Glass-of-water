import { Routes, RouterModule } from "@angular/router";
import { DashboardPage } from "./pages/dashboard/dashboard";
import { LoginPage } from "./pages/login/login";
import { AuthGuard } from "./services/auth.guard";
import { MainPage } from "./pages/main/main";
import { ProfilePage } from "./pages/profile/profile";

const routes: Routes = [
    { path: 'login', component: LoginPage },
    { 
        path: 'main', 
        component: MainPage, 
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardPage },
            { path: 'profile', component: ProfilePage }
        ] 
    },
    { path: '**', redirectTo: '/main' }
 ];
 
export const AppRouting = RouterModule.forRoot(routes);

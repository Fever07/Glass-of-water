import { Routes, RouterModule } from "@angular/router";
import { DashboardPage } from "./pages/dashboard/dashboard";
import { LoginPage } from "./pages/login/login";
import { AuthGuard } from "./services/auth.guard";
import { MainPage } from "./pages/main/main";
import { ProfilePage } from "./pages/profile/profile";
import { TempPage } from "./pages/temp/temp";
import { RegistrationPage } from "./pages/registration/registration";

const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'registration', component: RegistrationPage },
    { 
        path: 'main', 
        component: MainPage, 
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardPage },
            { path: 'profile', component: ProfilePage },
            { path: 'map', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ] 
    },
    { path: 'temp', component: TempPage },
    { path: '**', redirectTo: '/main' }
 ];
 
export const AppRouting = RouterModule.forRoot(routes);

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component'
import { NgModule } from '@angular/core';
 const routes: Routes = [
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: '',redirectTo: 'home',pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}

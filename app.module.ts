import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import {AppRoutes}from "./app.routes";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    imports:[
        BrowserModule,
        AppRoutes,
        CardModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule

    ],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppModule {}
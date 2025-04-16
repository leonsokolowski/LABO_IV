import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

export const routes: Routes = [
    {path : "", redirectTo : "login", pathMatch : "full"},
    {path : "login", component : LoginComponent, title : "Ingreso"},
    {path : "registro", component : RegistroComponent, title : "Registro"},
    {path : "bienvenida", component : BienvenidaComponent, title : "Bienvenida"},
    {path: "**", component : ErrorComponent , title:"Error"}
];
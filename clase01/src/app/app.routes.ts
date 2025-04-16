import { Routes } from '@angular/router';
import { BindeosComponent } from './pages/bindeos/bindeos.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {path: "", redirectTo: "bienvenida", pathMatch: "full"},
    {path: "bindeos", component : BindeosComponent, title:"tas bindeandoñ pibe"},
    {path: "login", component : LoginComponent, title:"tas logeandote pibe"},
    {path: "bienvenida", component : BienvenidaComponent, title:"bienvenido pibe"},
    {path: "**", //cualquier ruta
    component : ErrorComponent, title:"error pibe"}
];

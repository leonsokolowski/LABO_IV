import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';
import { bindNodeCallback } from 'rxjs';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component : HomeComponent, title: "home"},
    {path: "listado", component : ListadoComponent, title:"listado"},
    {path: "login", component : LoginComponent, title:"login"},
    {path: "registro", component : RegistroComponent, title:"registro"},
];

import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterModule} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email : string = "";
  password : string = "";
  mensaje_error : string = "";

  constructor(private router: Router) {}

  validarCampos() : boolean
  {
    if (this.email == "" || this.password == "")
    {
      this.mensaje_error = "Complete todas los campos para iniciar sesión";
      return false;
    }
    if (this.validarEmail(this.email) == false)
    {
      this.mensaje_error = "El formato del correo electrónico no es válido";
      return false;
    }

    this.mensaje_error = "";
    return true;
  }

  validarEmail(email:string) : boolean
  {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  onSubmit()
  {
    if (this.validarCampos()) 
    {
      console.log("Formulario válido, procesando login...");
      this.router.navigate(['/bienvenida']);
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email : string = "";
  password : string = "";
  c_password : string = "";
  mensaje_error : string = "";

  constructor(private router: Router) {}

  validarCampos() : boolean
  {
    if (this.email == "" || this.password == "" || this.c_password == "")
    {
      this.mensaje_error = "Complete todas los campos para iniciar sesión";
      return false;
    }
    if (this.validarEmail(this.email) == false)
    {
      this.mensaje_error = "El formato del correo electrónico no es válido";
      return false;
    }
    if (this.password != this.c_password)
    {
      this.mensaje_error = "La contraseña y su confirmación no coinciden";
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

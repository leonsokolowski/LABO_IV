import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  auth = inject(AuthService);

  registrarse()
  {
    console.log("Estoy llamando");
    this.auth.crearCuenta("Kokorito525@gmail.com", "locura123");
  }

}

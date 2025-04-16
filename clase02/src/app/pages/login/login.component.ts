import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth = inject(AuthService);

  logearse()
  {
    this.auth.iniciarSesion("Kokorito525@gmail.com", "locura123");
    // this.auth.iniciarSesion("leonsokolowski@gmail.com", "papa");
  }
}

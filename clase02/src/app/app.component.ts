import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatabaseService } from './services/database.service';
import {Auto} from "./classes/auto";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase02';
  db_service = inject(DatabaseService)

  constructor()
  {
    this.db_service.listar();
    const auto = new Auto("Toyota", "Lal", 500);
    auto.id = 1;
    //this.db_service.crear(auto);
    this.db_service.modificar(auto)
    this.db_service.eliminar(3);
  }
}

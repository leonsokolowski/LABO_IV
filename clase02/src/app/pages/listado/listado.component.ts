import { Component, inject, signal } from '@angular/core';
import { DatabaseService } from '../../services/database.service';  
import { Auto } from "../../classes/auto";
@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  db = inject(DatabaseService);
  // autos: Auto[] = [];
  autos = signal<Auto[]>([])//Señal que indica cuando cambia el valor de un elemento.
  hayAutos : boolean = true; //Ejemplo if

  eliminar(id:number)
  {
    console.log(id);
  }
  ngOnInit()
  {
    this.db.listar().then((autos: Auto[]) =>
    {
      this.autos.set(autos);
      // this.hayAutos = true;
    });
  }
}

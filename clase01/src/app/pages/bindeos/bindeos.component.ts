import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule],
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css'
})
export class BindeosComponent {
  title : string = 'LaboIV';
  urlImagen : string = "https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg";
  edad : number | undefined;
  objeto : any;

  cambiarTitle(title:string)
  {
    this.title = title;
  }
}

import { Component} from '@angular/core';

import listadoArticulos from '/src/assets/Json/articulos.json';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})

export class ArticulosComponent {
  Articulos: any=listadoArticulos;
}

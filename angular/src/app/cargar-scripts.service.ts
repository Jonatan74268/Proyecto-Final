import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  Cargar( archivos: string[]){
    for( let archivo of archivos ){
      let script = document.createElement("script");
      script.src = "./assets/js"+archivo+".js";
      let body = document.getElementsByName("body")[0];
      body.appendChild ( script );
    }
  }
}
//Todo este ts no debe existir xd fue una prueba para lo del js y no sirvió

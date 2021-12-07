import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//INICIO JS
// import { CargarScriptsService } from './cargar-scripts.service';
//FIN JS

//INTENTAR ESTE TUTORIAL 3ER O 2DO METODO
//IMPORTANTE
//05/12/21
//https://www.youtube.com/watch?v=kYsSJ2EpmWE

import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { SubscriptoresComponent } from './subscriptores/subscriptores.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    GaleriaComponent,
    NavbarComponent,
    ContactoComponent,
    SubscriptoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

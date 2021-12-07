import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './../app/articulos/articulos.component';
import { GaleriaComponent } from './../app/galeria/galeria.component';
import { ContactoComponent } from './../app/contacto/contacto.component';
import { SubscriptoresComponent } from './subscriptores/subscriptores.component';


const routes: Routes = [
  {
    path: '',
    component:ArticulosComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'subscriptores',
    component: SubscriptoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
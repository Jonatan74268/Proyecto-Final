import { Component, OnInit } from '@angular/core';
import Subscriptores from '/src/assets/Json/subscriptores.json';

@Component({
  selector: 'app-subscriptores',
  templateUrl: './subscriptores.component.html',
  styleUrls: ['./subscriptores.component.css']
})

export class SubscriptoresComponent  {
  subscriptores: any = Subscriptores;
}
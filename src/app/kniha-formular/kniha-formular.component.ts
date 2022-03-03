import { Component } from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  kniha: Kniha = {id:"1", nazov:"Malý princ Paťko", autor:"Jožo Alvarez", d:"5"};

  constructor() {}
}



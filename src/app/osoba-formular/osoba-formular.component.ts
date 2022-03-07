import { Component } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent{

  osoba: Osoba = {id:"1",meno:"aaa", priezvisko:"bbb"};

  constructor() { }

}

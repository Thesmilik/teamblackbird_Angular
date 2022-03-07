import { Component } from '@angular/core';
import { Vypozicky } from "../models/vypozicky.model";

@Component({
  selector: 'app-vypozicky-formular',
  templateUrl: './vypozicky-formular.component.html',
  styleUrls: ['./vypozicky-formular.component.css']
})
export class VypozickyFormularComponent {

  vypozicka: Vypozicky = {id: "1", kniha: "Malý torpédoborec Maťko", osoba: "Miro Šampion"};

  constructor() { }
}


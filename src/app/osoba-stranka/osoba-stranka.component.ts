import { Component } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-stranka',
  templateUrl: './osoba-stranka.component.html',
  styleUrls: ['./osoba-stranka.component.css']
})
export class OsobaStrankaComponent {

  osoby: Osoba[] = [];

  osobaNaUpravu?: Osoba;

  pridaj(o: Osoba){
    this.osoby.push(o)
  }

  uprav(o: Osoba){
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === o.id);
    if (index !== -1){
      this.osoby[index] = o;
    }
  }

  upravZoZoznamu(osoba: Osoba): void{
    this.osobaNaUpravu = osoba;
  }

  zmaz(osobaId: string){
    const index = this.osoby.findIndex(osobaArray => osobaArray.id === osobaId);
    if (index !== -1){
      this.osoby.splice(index, 1);
    }
  }

  constructor() { }

}

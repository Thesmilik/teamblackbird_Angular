import { Component } from '@angular/core';
import {Vypozicky} from "../models/vypozicky.model";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent {

  vypozicky: Vypozicky[] = [];

  vypozickyNaUpravu?: Vypozicky;

  pridaj(v: Vypozicky){
    this.vypozicky.push(v)
  }

  uprav(v: Vypozicky){
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.id === v.id);
    if (index !== -1){
      this.vypozicky[index] = v;
    }
  }

  upravZoZoznamu(vypozicka: Vypozicky): void{
    this.vypozickyNaUpravu = vypozicka;
  }

  zmaz(vypozickaId: string){
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.id === vypozickaId);
    if (index !== -1){
      this.vypozicky.splice(index, 1);
    }
  }

  constructor() { }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vypozicky} from "../models/vypozicky.model";

@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent {

  @Input()
  vypozicky: Vypozicky[] = [];

  @Output()
  upravVypozicku: EventEmitter<Vypozicky> = new EventEmitter<Vypozicky>();

  @Output()
  zmazVypozicku: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  uprav(vypozicka: Vypozicky): void{
    this.upravVypozicku.emit(vypozicka);
  }

  zmaz(vypozickaId: string | undefined): void{
    if (vypozickaId){
      this.zmazVypozicku.emit(vypozickaId);
    }
  }
}

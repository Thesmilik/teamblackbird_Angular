import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoby-zoznam',
  templateUrl: './osoby-zoznam.component.html',
  styleUrls: ['./osoby-zoznam.component.css']
})
export class OsobyZoznamComponent{

  @Input()
  osoby: Osoba[] = [];

  @Output()
  upravOsobu: EventEmitter<Osoba> = new EventEmitter<Osoba>();

  @Output()
  zmazOsobu: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  uprav(osoba: Osoba): void{
    this.upravOsobu.emit(osoba);
  }

  zmaz(osobaId: string | undefined): void{
    if (osobaId){
      this.zmazOsobu.emit(osobaId);
    }
  }
}

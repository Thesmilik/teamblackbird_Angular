import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  @Input()
  set kniha(data: Kniha | undefined) {
    if (data) {
      this.formular.setValue(data);
    }
  }

  @Output()
  pridajKnihu = new EventEmitter<Kniha>();

  @Output()
  upravKnihu = new EventEmitter<Kniha>();

  formular: FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      nazov: new FormControl(null),
      autor: new FormControl(null),
      dostupnost: new FormControl(null)
    });
  }

  pridaj() {
    this.pridajKnihu.emit({id: Math.random().toString(), nazov: this.formular.value.nazov, autor: this.formular.value.autor, dostupnost:this.formular.value.dostupnost})
    this.formular.reset();
  }

  uprav(){
    this.upravKnihu.emit(this.formular.value);
    this.formular.reset();
  }
}



import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Vypozicky } from "../models/vypozicky.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vypozicky-formular',
  templateUrl: './vypozicky-formular.component.html',
  styleUrls: ['./vypozicky-formular.component.css']
})
export class VypozickyFormularComponent {

  @Input()
  set vypozicka(data: Vypozicky | undefined) {
    if (data) {
      this.formular.setValue(data);
    }
  }

  @Output()
  pridajVypozicku = new EventEmitter<Vypozicky>();

  @Output()
  upravVypozicku = new EventEmitter<Vypozicky>();

  formular: FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      kniha: new FormControl(null),
      osoba: new FormControl(null)
    });
  }

  pridaj() {
    this.pridajVypozicku.emit({id: Math.random().toString(), kniha:this.formular.value.kniha, osoba:this.formular.value.osoba})
    this.formular.reset();
  }

  uprav(){
    this.upravVypozicku.emit(this.formular.value);
    this.formular.reset();
  }
}


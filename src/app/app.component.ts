import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  cena = 0;

  public toBin(){

  }
  public toDec(){

  }



  form: FormGroup;
  constructor(){
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

}

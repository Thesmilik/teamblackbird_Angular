import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU { OSOBY, KNIHY, VYPOZICKY}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formuláre na evidenciu zákazníkov, kníh a výpožičiek.\n';

  knihy: any = [];
  kniha = {id:"1", nazov:"Malý princ Paťko", autor:"Jožo Alvarez", d:"5"};

  vypozicky: any = [];
  vypozicka = {id:"1", kniha:"Malý torpédoborec Maťko", osoba:"Miro Šampion"};

  menu = MENU;

  constructor(private router: Router) {
  }

  otvorMenu(m: MENU){
    if (m == MENU.OSOBY){
      this.router.navigate(["/osoba"]);
    }
  }
}

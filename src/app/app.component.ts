import { Component } from '@angular/core';

enum MENU { OSOBY, KNIHY, VYPOZICKY}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formuláre na evidenciu zákazníkov, kníh a výpožičiek.\n';

  osoby: any = [];
  osoba = {id:"1", meno:"Jožko Mrkvička", kontakt:"email@email.com"};

  knihy: any = [];
  kniha = {id:"1", nazov:"Malý princ Paťko", autor:"Jožo Alvarez", d:"5"};

  menu = MENU;
  aktMenu: MENU = MENU.OSOBY;

  otvorMenu(m: MENU){
    this.aktMenu = m;
  }

  public pridaj(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

  public pridaj1(): void{
    this.knihy.push({id: this.kniha.id, nazov: this.kniha.nazov, autor: this.kniha.autor, d: this.kniha.d});
  }
}

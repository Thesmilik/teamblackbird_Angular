import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobyZoznamComponent } from './osoba-zoznam/osoby-zoznam.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import { KnihaStrankaComponent } from './kniha-stranka/kniha-stranka.component';
import { KnihaZoznamComponent } from './kniha-zoznam/kniha-zoznam.component';
import { VypozickyFormularComponent } from './vypozicky-formular/vypozicky-formular.component';
import { VypozickyStrankaComponent } from './vypozicky-stranka/vypozicky-stranka.component';
import { VypozickyZoznamComponent } from './vypozicky-zoznam/vypozicky-zoznam.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobyZoznamComponent,
    OsobaStrankaComponent,
    KnihaFormularComponent,
    KnihaStrankaComponent,
    KnihaZoznamComponent,
    VypozickyFormularComponent,
    VypozickyStrankaComponent,
    VypozickyZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

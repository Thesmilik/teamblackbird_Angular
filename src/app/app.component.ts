import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dec = 0;

  bits: boolean[] = [false, false, false, false, false, false, false, false];

  public toBin() {
    let bin = ((this.dec >>> 0).toString(2)).padStart(8, '0');
    for (let i = 0; i < bin.length; i++) {
      if (i < bin.length && bin[i] == '1') {
        this.bits[7 - i] = true;
      } else {
        this.bits[7 - i] = false;
      }
    }
  }

  b0 = 0;
  b1 = 0;
  b2 = 0;
  b3 = 0;
  b4 = 0;
  b5 = 0;
  b6 = 0;
  b7 = 0;

  public toDec(){
    if (this.bits[0] == true ){
      this.b0 = + 1;
    }else {
      this.b0 = 0;
    }

    if (this.bits[1] == true ){
      this.b1 = + 2;
    }else {
      this.b1 = 0;
    }

    if (this.bits[2] == true ){
      this.b2 = + 4;
    }else {
      this.b2 = 0;
    }

    if (this.bits[3] == true ){
      this.b3 = + 8;
    }else {
      this.b3 = 0;
    }

    if (this.bits[4] == true ){
      this.b4 = + 16;
    }else {
      this.b4 = 0;
    }

    if (this.bits[5] == true ){
      this.b5 = + 32;
    }else {
      this.b5 = 0;
    }

    if (this.bits[6] == true ){
      this.b6 = + 64;
    } else {
      this.b6 = 0;
    }

    if (this.bits[7] == true ){
      this.b7 = + 128;
    }else {
      this.b7 = 0;
    }

    return this.dec = this.b0 + this.b1 + this.b2 + this.b3 + this.b4 +this.b5 + this.b6 + this.b7;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dec = 0;
  v = 0;

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
  /*
  public toDec(){
  }*/
}

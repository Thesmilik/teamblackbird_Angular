export class Kniha {

  id: string;
  autor: string;
  nazov: string;
  d: string;

  constructor(kniha: Kniha) {
    this.id = kniha.id;
    this.autor = kniha.autor;
    this.nazov = kniha.nazov;
    this.d = kniha.d;
  }

}

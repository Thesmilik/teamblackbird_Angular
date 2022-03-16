export class Kniha {

  id?: string;
  autor: string;
  nazov: string;
  dostupnost: string;


  constructor(id: string, autor: string, nazov: string, dostupnost: string) {
    this.id = id;
    this.autor = autor;
    this.nazov = nazov;
    this.dostupnost = dostupnost;
  }
}

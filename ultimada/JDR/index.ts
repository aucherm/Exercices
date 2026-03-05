/* class Guerrier {
  pv: number = 10;

  constructor() {}
  attaque(cible: Monstre) {
    cible.pv--;
  }
} */

/* class Monstre {
pv: number = 8;

  constructor() {}
  attaque(cible: Guerrier | Soigneur) {
    cible.pv--;
  } 
} */

/* class Soigneur {
  nombrepv: number = 10;

  constructor() {}

  soigne(cible: Guerrier) {
    cible.pv++;
  }
} */

class Personnage {
  pv = 10;

  constructor(pv?: number) {
    if (pv) {
      this.pv = pv;
    }
  }
}

class Combattant extends Personnage {
  degats: number;

  constructor(degats: number, pv?: number) {
    super(pv);
    this.degats = degats;
  }
  attaque(cible: Personnage) {
    cible.pv -= this.degats;
  }
}

class Guerrier extends Combattant {
  constructor(degats: number) {
    super(degats);
  }
  hurle() {
    this.degats += 5;
  }
}

class Monstre extends Combattant {
  constructor(degats: number, pv?: number) {
    super(degats, pv);
    this.degats = degats;
  }
}

class Soigneur extends Personnage {
  constructor() {
    super(10);
  }

  soigne(cible: Guerrier) {
    cible.pv++;
  }
}

const Arthur = new Guerrier(12);
const Ogre = new Monstre(1);
const Merlin = new Soigneur();

Arthur.hurle();
Arthur.attaque(Ogre);
Ogre.attaque(Arthur);
Merlin.soigne(Arthur);
Ogre.attaque(Merlin);

console.log({ Arthur, Ogre, Merlin });

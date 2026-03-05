class Animaux {
  pelage: string;
  cri: string;
  nombre_membres: number;
  capacite: string;
  habitat_naturel: string;
  regime: string;

  constructor(
    pelage: string,
    cri: string,
    nombre_membres: number,
    capacite: string,
    habitat_naturel: string,
    regime: string,
  ) {
    this.pelage = pelage;
    this.cri = cri;
    this.nombre_membres = nombre_membres;
    this.capacite = capacite;
    this.habitat_naturel = habitat_naturel;
    this.regime = regime;
  }
}

class Mammifere extends Animaux {
  constructor(
    cri: string,
    nombre_membres: number,
    habitat_naturel: string,
    regime: string,
  ) {
    super("poils", cri, nombre_membres, "marcher", habitat_naturel, regime);
  }
}

class Bipede extends Mammifere {
  constructor(cri: string, habitat_naturel: string, regime: string) {
    super(cri, 2, habitat_naturel, regime);
  }
}

class Homme extends Bipede {
  constructor() {
    super("parle", "maison", "carnivore");
  }

  getInforamtion() {
    return `Un homme possède ${this.nombre_membres} membres, il ${this.cri}, vit dans une ${this.habitat_naturel} et est ${this.regime}.`;
  }

  parler() {
    return `Un homme ${this.cri}`;
  }
}

const humain = new Homme();
console.log(humain.getInforamtion());
console.log(humain.parler());

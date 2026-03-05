class Animaux {

    constructor(pelage, cri, nombre_membres, capacite, habitat_naturel, regime) {
        this.pelage = pelage;
        this.cri = cri;
        this.nombre_membres = nombre_membres;
        this.capacite = capacite;
        this.habitat_naturel = habitat_naturel;
        this.regime = regime;
    }
}

class Mammifere extends Animaux {
   
    constructor(cri, nombre_membres, habitat_naturel, regime) { 
        super("poils", cri, nombre_membres, "marcher", habitat_naturel, regime);
    }
}

class Bipede extends Mammifere {
  
    constructor(cri, habitat_naturel, regime) {
        super(cri, 2, habitat_naturel, regime);
     }

}

class Homme extends Bipede {
    
    constructor() {
        super("parle", "maison", "carnivore")
     }

     getInforamtion() {
        return `Un homme possède ${this.nombre_membres} membres, il ${this.cri}, vit dans une ${this.habitat_naturel} et est ${this.regime}.`;
     }
}

const humain = new Homme();
console.log(humain.getInforamtion());
/* class Guerrier {
  pv: number = 10;

  constructor() {}
  attaque(cible: Monstre) {
    cible.pv--;
  }
} */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Soigneur = /** @class */ (function () {
    function Soigneur() {
        this.nombrepv = 10;
    }
    Soigneur.prototype.soigne = function (cible) {
        cible.pv++;
    };
    return Soigneur;
}());
var Monstre = /** @class */ (function () {
    function Monstre() {
        this.pv = 8;
    }
    Monstre.prototype.attaque = function (cible) {
        cible.pv--;
    };
    return Monstre;
}());
var Personnage = /** @class */ (function () {
    function Personnage() {
        this.pv = 10;
    }
    Personnage.prototype.attaque = function (cible) {
        cible.pv--;
    };
    return Personnage;
}());
var Guerrier = /** @class */ (function (_super) {
    __extends(Guerrier, _super);
    function Guerrier() {
        return _super.call(this) || this;
    }
    return Guerrier;
}(Personnage));
var Arthur = new Guerrier();
var Ogre = new Monstre();
var Merlin = new Soigneur();
Arthur.attaque(Ogre);
Ogre.attaque(Arthur);
Merlin.soigne(Arthur);
Ogre.attaque(Merlin);
console.log({ Arthur: Arthur, Ogre: Ogre, Merlin: Merlin });

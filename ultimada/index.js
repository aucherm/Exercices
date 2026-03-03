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
var Personnage = /** @class */ (function () {
    function Personnage(pv) {
        this.pv = 10;
        if (pv) {
            this.pv = pv;
        }
    }
    return Personnage;
}());
var Combattant = /** @class */ (function (_super) {
    __extends(Combattant, _super);
    function Combattant(degats, pv) {
        var _this = _super.call(this, pv) || this;
        _this.degats = degats;
        return _this;
    }
    Combattant.prototype.attaque = function (cible) {
        cible.pv -= this.degats;
    };
    return Combattant;
}(Personnage));
var Guerrier = /** @class */ (function (_super) {
    __extends(Guerrier, _super);
    function Guerrier(degats) {
        return _super.call(this, degats) || this;
    }
    Guerrier.prototype.hurle = function () {
        this.degats += 5;
    };
    return Guerrier;
}(Combattant));
var Monstre = /** @class */ (function (_super) {
    __extends(Monstre, _super);
    function Monstre(degats, pv) {
        var _this = _super.call(this, degats, pv) || this;
        _this.degats = degats;
        return _this;
    }
    return Monstre;
}(Combattant));
var Soigneur = /** @class */ (function (_super) {
    __extends(Soigneur, _super);
    function Soigneur() {
        return _super.call(this, 10) || this;
    }
    Soigneur.prototype.soigne = function (cible) {
        cible.pv++;
    };
    return Soigneur;
}(Personnage));
var Arthur = new Guerrier(12);
var Ogre = new Monstre(1);
var Merlin = new Soigneur();
Arthur.hurle();
Arthur.attaque(Ogre);
Ogre.attaque(Arthur);
Merlin.soigne(Arthur);
Ogre.attaque(Merlin);
console.log({ Arthur: Arthur, Ogre: Ogre, Merlin: Merlin });

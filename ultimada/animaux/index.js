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
var Animaux = /** @class */ (function () {
    function Animaux(pelage, cri, nombre_membres, capacite, habitat_naturel, regime) {
        this.pelage = pelage;
        this.cri = cri;
        this.nombre_membres = nombre_membres;
        this.capacite = capacite;
        this.habitat_naturel = habitat_naturel;
        this.regime = regime;
    }
    return Animaux;
}());
var Mammifere = /** @class */ (function (_super) {
    __extends(Mammifere, _super);
    function Mammifere(cri, nombre_membres, habitat_naturel, regime) {
        return _super.call(this, "poils", cri, nombre_membres, "marcher", habitat_naturel, regime) || this;
    }
    return Mammifere;
}(Animaux));
var Bipede = /** @class */ (function (_super) {
    __extends(Bipede, _super);
    function Bipede(cri, habitat_naturel, regime) {
        return _super.call(this, cri, 2, habitat_naturel, regime) || this;
    }
    return Bipede;
}(Mammifere));
var Homme = /** @class */ (function (_super) {
    __extends(Homme, _super);
    function Homme() {
        return _super.call(this, "parle", "maison", "carnivore") || this;
    }
    Homme.prototype.getInforamtion = function () {
        return "Un homme poss\u00E8de ".concat(this.nombre_membres, " membres, il ").concat(this.cri, ", vit dans une ").concat(this.habitat_naturel, " et est ").concat(this.regime, ".");
    };
    Homme.prototype.parler = function () {
        return "Un homme ".concat(this.cri);
    };
    return Homme;
}(Bipede));
var humain = new Homme();
console.log(humain.getInforamtion());
console.log(humain.parler());

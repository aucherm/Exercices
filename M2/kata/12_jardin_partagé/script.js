var Plant = /** @class */ (function () {
    function Plant(name) {
        this.name = name;
        this.waterLevel = 0;
        this.growthLevel = 0;
        this.status = "seed";
    }
    Plant.prototype.water = function (amount) {
        if (amount <= 0)
            return;
        this.waterLevel += amount;
    };
    Plant.prototype.passDay = function () {
        if (this.waterLevel >= 2) {
            this.waterLevel -= 2;
            this.growthLevel += 1;
        }
        if (this.growthLevel >= 6) {
            this.status = "flower";
        }
        else if (this.growthLevel >= 3) {
            this.status = "spout";
        }
        else {
            this.status = "seed";
        }
    };
    Plant.prototype.getSummary = function () {
        return "".concat(this.name, " - status:").concat(this.status, ", eau:").concat(this.waterLevel, ", croissance: ").concat(this.growthLevel);
    };
    return Plant;
}());
var tulip = new Plant("Tulipe");
var rose = new Plant("Rose");
var daisy = new Plant("Pâquerette");
var lavender = new Plant("Lavande");
tulip.water(4);
rose.water(6);
daisy.water(2);
lavender.water(8);
tulip.passDay();
rose.passDay();
daisy.passDay();
lavender.passDay();
tulip.passDay();
rose.passDay();
daisy.passDay();
lavender.passDay();
tulip.water(2);
rose.passDay();
daisy.passDay();
lavender.passDay();
console.log(tulip.getSummary());
console.log(rose.getSummary());
console.log(daisy.getSummary());
console.log(lavender.getSummary());

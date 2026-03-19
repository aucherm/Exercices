class Plant {
    name: string;
    waterLevel: number;
    growthLevel: number;
    status: string;

    constructor(name: string) {
        this.name = name;
        this.waterLevel = 0;
        this.growthLevel = 0;
        this.status = "seed";
    }

    water(amount: number) : void {
        if (amount <= 0) return;
        this.waterLevel += amount;
    }

    passDay(): void {
        if (this.waterLevel >= 2) {
            this.waterLevel -= 2;
            this.growthLevel += 1;
        }

        if (this.growthLevel >= 6) {
            this.status = "flower";
        } else if (this.growthLevel >= 3) {
            this.status = "sprout";
        } else {
            this.status = "seed";
        }
    }

    getSummary(): string {
        return `${this.name} - status:${this.status}, eau:${this.waterLevel}, croissance: ${this.growthLevel}`;
    }
}
const tulip = new Plant("Tulipe");
const rose = new Plant("Rose");
const daisy = new Plant("Pâquerette");
const lavender = new Plant("Lavande");

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
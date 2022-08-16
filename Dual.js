class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        // reduce target res by power.
        target.res -= this.power;
        console.log(`${this.name} attacks ${target.name} and decreased ${this.name}'s resilience by ${this.power}`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            // Similarly "Units" can attack other "Units"
            if (this.stat == "power") {
                target.power += this.magnitude;
                console.log(`${this.name} changed the power of ${target.name} by ${this.magnitude}`);
            }
            else if (this.stat == "res") {
                target.res += this.magnitude;
                console.log(`${this.name} changed the resilience of ${target.name} by ${this.magnitude}`);
            }

        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", +3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", +2);

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);

class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength =3;
    };

    // sayName() - log to the console the name of this Ninja instance
    // showStats() - log to the console all 4 attributes of this Ninja instance
    // drinkSake() - Add 10 to this Ninja instance health attribute
    
sayName() {
        console.log("Name: " + this.name);
    };

    showStats() {
        console.log(
            "Name: "+ this.name,
            " Health"+ this.health,
            " Speed: " + this.speed,
            " Strength: " +this.strength
        );
    };

    drinkSake() {
        this.health += 10;
        console.log("Sake bumped health too " + this.health);
    };
};

// ---------------------------------------------------------

const tiffany = new Ninja("Tiffany", "20");

console.log(tiffany);

    sayName(tiffany);
    showStats(tiffany);
    drinkSake(tiffany);
    tiffany.sayName();
    tiffany.showStats();
    tiffany.drinkSake();
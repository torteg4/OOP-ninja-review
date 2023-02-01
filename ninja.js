
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
            " Health: "+ this.health,
            " Speed: " + this.speed,
            " Strength: " +this.strength
        );
    };

    drinkSake() {
        this.health += 10;
        console.log("Sake bumped health to " + this.health + ".");
    };
};

// ---------------------------------------------------------

const tiffany = new Ninja("Tiffany", 20);

// console.log(tiffany);

    // tiffany.sayName();
    // tiffany.showStats();
    // tiffany.drinkSake();


// !Sensei is the CHILD class. The parent class EXTENDS to the child class. Needs to be in the same file apparently

class Sensei extends Ninja{
    constructor(name){
        super(name, 200)
        this.name = name;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    };

    speakWisdom() {
        const sake = super.drinkSake();
        // const message = "What one programmer can do in one month, two programmers can do in two months";
        console.log(sake)
        console.log("What one programmer can do in one month, two programmers can do in two months");
    };
};

// speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

const superTiff = new Sensei("Super Tiff");

// console.log(superTiff)
superTiff.speakWisdom();
superTiff.showStats();
class vehicle {

    constructor(name, speed, type) {

        this.name = name;
        this.speed = speed;
        this.type = type;
    }

    vehicleDetail() {

        // console.log(`${this.name} is speed ${this.speed}`)

        document.getElementById("v").innerHTML = `${this.name} is speed ${this.speed}`;
    }
}

class Bike extends vehicle {

    constructor(name, speed, type, price) {
        super(name, speed, type);
        this.price = price;


    }

    priceDetail() {

        // console.log(`${this.name} is price with tax ${this.price + 500}`);

        document.getElementById("p").innerHTML = `${this.name} is price with tax ${this.price + 2900}`;



    }
}

let b1 = new Bike("jawa", 110, "normal", 200000);

b1.priceDetail();
b1.vehicleDetail();




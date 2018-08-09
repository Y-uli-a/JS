'use strict'

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      this._toppings.push(topping);
    } else {
      return "This topping is already ordered!";
    }
    return this._toppings;
  }

  removeTopping(topping) {
    const findTopping = this._toppings.find(
      toppingItem => toppingItem === topping
    );
    const idx = this._toppings.indexOf(findTopping);
    return this._toppings.splice(idx, 1);
  }

  getToppings() {
    return this._toppings;
  }

  getSize() {
    return this._size;
  }

  getStuffing() {
    return this._stuffing;
  }

  calculatePrice() {
    let hamburgerOrdered = [Hamburger.SIZES[this._size], Hamburger.STUFFINGS[this._stuffing]];
    let totalPrice = hamburgerOrdered.reduce((acc, obj) => acc + obj.price, 0);
    if (this._toppings) {
      let toppingPrice = 0;
      let toppingsOrderedPrice = this._toppings.forEach(toppingAdded => {
        toppingPrice += Hamburger.TOPPINGS[toppingAdded].price;
      });
      return totalPrice + toppingPrice;
    }


  }


  calculateCalories() {
    const sizeCalories = Hamburger.SIZES[this._size].calories;
    const stuffingCalories = Hamburger.STUFFINGS[this._stuffing].calories;
    if (this._toppings) {
      let toppingCalories = 0;
      let toppingsOrdered = this._toppings.forEach(toppingAdded => {
        return (toppingCalories += Hamburger.TOPPINGS[toppingAdded].calories);
      });
      let caloriesWithTopping =
        sizeCalories + stuffingCalories + toppingCalories;
      return caloriesWithTopping;
    }
    let caloriesBasicHamburger = sizeCalories + stuffingCalories;
    return caloriesBasicHamburger;
  }
}


Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50
  },
  [Hamburger.SIZE_LARGE]: {
    price: 60,
    calories: 100
  }
};

Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 5,
    calories: 10
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 25,
    calories: 40
  }
};

Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 30
  }
};


const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);




// Добавка из приправы
console.log("Topping:", hamburger.addTopping(Hamburger.TOPPING_SPICE));



// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
console.log("Topping:", hamburger.addTopping(Hamburger.TOPPING_SAUCE));

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log(
  "Is hamburger large: ",
  hamburger.getSize() === Hamburger.SIZE_LARGE
); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

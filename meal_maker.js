//MEAL MAKER

//Lets you create a menu, and generates a random three-course meal based on what's available on the menu.
//Also calculates total price of your meal.


//The menu object, contains all available dishes (sorted into three courses: appetizers, mains and desserts) and methods to add new dishes (with prices) to the menu.
const menu = {

  //Lists of all available dishes within the three courses.
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  //Appetizer getter - returns array of appetizers.
  get appetizers() {
    return this._courses.appetizers;
  },

  //Appetizer setter - adds new appetizer to menu, under the appetizers course.
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },

 //Main getter - returns array of mains.
  get mains() {
    return this._courses.mains;
  },

  //Main setter - adds new main to menu, under the mains course.
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },

 //Dessert getter - returns array of desserts.
  get desserts() {
    return this._courses.desserts;
  },

 //Dessert setter - adds new dessert to menu, under the desserts course.
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },

//Returns an object containing 3 arrays - all dishes and prices contained in appetizers, mains and desserts.
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts      
    };
  },

//Adds new dishes (with price) to the appropriate course.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this[courseName] = dish
  },

//Returns a random dish from the menu of the specified course.
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

//Combines a random dish from each course into a meal, returns the meal and the total price.
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your random meal:\n\nAppetizer:\t${appetizer.name}\nMain:\t\t${main.name}\nDessert:\t${dessert.name}\n\nTotal price:\t${totalPrice}`;
  }
};


//Adds three new appetizers to the menu.
menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 40);
menu.addDishToCourse('appetizers', 'Cheese Plate', 45);
menu.addDishToCourse('appetizers', 'Spring Rolls', 50);

//Adds three new mains to the menu.
menu.addDishToCourse('mains', 'Steak', 90);
menu.addDishToCourse('mains', 'Lasagna', 95);
menu.addDishToCourse('mains', 'Curry', 100);

//Adds three new desserts to the menu.
menu.addDishToCourse('desserts', 'Ice Cream', 20);
menu.addDishToCourse('desserts', 'Chocolate Pudding', 25);
menu.addDishToCourse('desserts', 'Cherry Pie', 30);

//Saves the randomly generated meal in const "meal".
const meal = menu.generateRandomMeal();
//Logs the randomly composed meal with price to the console.
console.log(meal);





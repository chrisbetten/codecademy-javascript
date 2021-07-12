//Kelvin Weather
//Translates temperature from degrees Kelvin to Celsius, Fahrenheit and Newton.


//Today's temperature in degrees Kelvin.
const kelvin = 293;

//Today's temperature in Celsius (273 less than Kelvin).
let celsius = kelvin - 273;

//Today's temperature in Fahrenheit, calculated from Celsius.
let fahrenheit = celsius * (9/5) + 32;

//Rounds Fahrenheit temperature down to nearest whole number.
fahrenheit = Math.floor(fahrenheit);

//Logs today's temperature in degrees Fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Calculates today's temperature to degrees Newton.
let newton = celsius * (33/100);

//Rounds Newton temperature down to nearest whole number.
newton = Math.floor(newton);

//Logs today's temperature in degrees Newton.
console.log(`The temperature is ${newton} degrees Newton.`);
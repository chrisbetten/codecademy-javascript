//CALCULATE YOUR AGE IN DOG YEARS
//This program will convert your human age to dog years.

//This variable contains my current age.
let myAge = 34;

//The first two years of life.
let earlyYears = 2;

//The two first years of a dog's life equal to 10.5 human years each.
earlyYears *= 10.5;

//My age minus the 2 first years.
let laterYears = myAge - 2;

//My age (-2 first years) * 4 - how many dog years I've lived.
laterYears *= 4;

//My age in dog years, adding my two first years with the rest of my years, as the two first are worth 10.5 years each, and the later years are worth 4 each.
let myAgeInDogYears = earlyYears + laterYears;

//My name, stored in all lowercase letters in the variable myName.
let myName = 'Christine'.toLowerCase();

//Prints a sentence declaring my name, my human age, and my age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
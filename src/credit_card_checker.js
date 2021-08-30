//CREDIT CARD CHECKER
//Checks the validity of credit card numbers,
//based on the Luhn algorithm.


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Checks if a single 15-digit credit card number is valid.
const validateCred = array => {
  let tempArray = [];
  let loopCount = 1;

  for (let i = array.length-1; i >= 0; i--) {
    if (loopCount % 2 !== 0) {
      tempArray.push(array[i]);
      loopCount += 1;
    } else {
      let tempNum = array[i] * 2;
      if (tempNum > 9) {
        tempNum -= 9;
        tempArray.push(tempNum);
        loopCount += 1;
      } else {
        tempArray.push(tempNum);
        loopCount +=1;
      };
    };
  };

  let checkNum = tempArray.reduce((a, b) => a+b);

  if (checkNum % 10 === 0) {
    return true;
  } else {
    return false;
  };
};


// Returns an array of invalid credit card numbers
// from an array of credit card numbers.
const findInvalidCards = array => {
  let invalidCards = [];
  for (let i = 0; i < array.length; i++) {
    if (validateCred(array[i]) === false) {
      invalidCards.push(array[i]);
    };   
  };
  return invalidCards; 
};


// Returns an array of credit card companies who have
// distributed cards with invalid numbers.
const idInvalidCardCompanies = array => {
  let tempCompanies = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === 3) {
      tempCompanies.push('Amex (American Express)');
    } else if (array[i][0] === 4) {
      tempCompanies.push('Visa');
    } else if (array[i][0] === 5) {
      tempCompanies.push('Mastercard');
    } else if (array[i][0] === 6) {
      tempCompanies.push('Discover');
    } else {
      console.log('Company not found');
    };
  };

  let companies = [...new Set(tempCompanies)];
  return companies;
};


// Turns a string of numbers into an array, returns array.
const stringToArray = string => {
  let newArray = string.split('');
  let returnArray = newArray.map(i => parseInt(i, 10));
  return returnArray;
};


let testString = '123451234512345';


console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(batch));
console.log(stringToArray(testString));




/*
console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));

console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));

console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));


console.log(findInvalidCards(batch));
*/


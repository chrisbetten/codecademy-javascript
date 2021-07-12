//Magic Eight Ball
//This program will let you ask a Magic Eight Ball a question, and it will provide a prediction for you.


//Stores username.
let userName = '';

//Prints greeting, with or without stored user name.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//The question the user wants to ask the magic eight ball.
let userQuestion = '';

//States the question asked by the user.
console.log(`You want to ask the Magic Eight Ball this: ${userQuestion}`);

//Generates random number between 0-7.
let randomNumber = Math.floor(Math.random() * 8);

//Generates empty string variable eightBall.
let eightBall = '';

//Assigns prediction statement to eightBall based on randomNumber.
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
};

//Logs content of eightBall (prediction) to console.
console.log(eightBall);




/*
//Prints prediction statement based on randomNumber.
switch(randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case  4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;           
  default:
    console.log('Not sure, try again');
    break;  
};
*/



/*
//Array of all potential eight ball prediction statements.
const eightBallReplies = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'];

//Prints prediction statement based on randomNumber.
let eightBall = eightBallReplies[randomNumber];
*/


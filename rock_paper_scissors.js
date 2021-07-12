//ROCK, PAPER, SCISSORS
//Lets you play the classic game against a computer adversary!
//(If you're sneaky, you can cheat to guarantee your victory as well...)


//Gets the user's choice and converts to lowercase. (rock, paper, scissors, bomb)
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('You have to pick either rock, paper or scissors. Try again.');
  };
};



//Generates a random choice for the computer.
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  };
};



//Checks user choice and computer choice against each other and determines who the winner is.
const determineWinner = (userChoice, computerChoice) => {
  //THIS IS THE CHEAT, you sneaky devil, you!
  if (userChoice === 'bomb') {
    return 'You won, you cheater!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  };

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    };
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    };
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    };
  };
};



/*This function plays the actual game by collecting user input,
computer input and running the function to determine the winner.*/
const playGame = () => {
  //INPUT YOUR CHOICE IN THE FUNCTION CALL ON THE NEXT LINE! (rock, paper, scissors, bomb)
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('Your choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};



//This function call starts the game.
playGame();
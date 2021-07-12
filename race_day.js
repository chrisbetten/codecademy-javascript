//RACE DAY
//Registers runners for a race, gives them race numbers and race times based on age and how early they registered.


//Generates random race number between 0-999.
let raceNumber = Math.floor(Math.random() * 1000);

//Shows if a runner registered early.
let earlyRunner = true;

//Age of runner.
let runnerAge = 18;

//Checks if runner registered early AND is over 18 - adds 1000 to their race number if yes. Early runners get numbers between 1000-1999.
if (earlyRunner && runnerAge > 18) {
  raceNumber += 1000;
};

//Checks if runner registered early AND is over 18 - logs their race number and their race time. Early registrations (18+) run at 9:30 am, late at 11:00 am. All runners under 18 run at 12:30 pm. Else statement asks 18-year-olds to see the registration desk for clarification.
if (earlyRunner && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`);
} else if (!earlyRunner && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm.`);
} else {
  console.log('If you are exactly 18 years old, please see the registration desk.');
};
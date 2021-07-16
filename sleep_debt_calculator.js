//SLEEP DEBT CALCULATOR
//Lets you input how many hours of sleep you got each night last week, and compares it to how many hours you WANT to get each night.
//Calculates how many hours you went over/under, or if you were bang on target.


//Register how many hours of sleep you got each night the last week (7 days).
const getActualSleepHours = () => 6.25 + 8 + 6.5 + 7.75 + 6.75 + 10.5 + 6.25;


//Lets you pass your ideal hours of sleep per night as an argument, calculates your ideal amount of sleep in a week (7 days).
const getIdealSleepHours = (idealHours) => idealHours * 7;


//Compares how many hours you slept last week to how many hours you WANT to sleep per week, logs outcome.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  //Remember to input how many hours you want to sleep each night when calling the function below!
  let idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep this week - exactly ${idealSleepHours} hours!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more than enough sleep this week. You actually got ' + (actualSleepHours - idealSleepHours) + ' hours more than you need!');
  } else {
    console.log("You should get some rest, you didn't get enough sleep this week. You got " + (idealSleepHours - actualSleepHours) + " hours less sleep than you need.");
  };
};


//Runs the sleep debt calculator.
calculateSleepDebt();
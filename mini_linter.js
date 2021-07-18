//MINI LINTER
//A program that improves text by removing unnecessary words and points out how many times overused words appear in the text.
//There is an optional function to remove all overused words from the text.
//The program also gives you information about how many words and sentences the text contains.


//The entire original story contained in one string.
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';


//An array containing frequently overused words.
let overusedWords = ['really', 'very', 'basically'];


//An array containing unnecessary words that should be cut from stories.
let unnecessaryWords = ['extremely', 'literally', 'actually' ];


//Turns the original story string into an array of individual words.
let storyWords = story.split(' ');


//Iterates through storyWords, removes unnecessary words (by checking if the word is found in the unecessaryWords array) and stores the pruned and improved story in betterWords.
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));


let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

//Checks how many times each of the overused words (from overusedWords array) appear in the story.
for (let i = 0; i < storyWords.length; i++) {
  if (storyWords[i] === overusedWords[0]) {
    reallyCount++;
  } else if (storyWords[i] === overusedWords[1]) {
    veryCount++;
  } else if (storyWords[i] === overusedWords[2]) {
    basicallyCount++;
  }
}


/*
//Optional function that removes all overused words from the text.
let betterWordsLean = betterWords.filter(word => !overusedWords.includes(word));
*/


let sentenceCounter = 0;

//Checks how many sentences there are in the story by checking how many words end with . or !
for (let i = 0; i < storyWords.length; i++) {
  if (storyWords[i].endsWith('.') || storyWords[i].endsWith('!')) {
    sentenceCounter++;
  };
}


//A function that logs facts about the story - how many words it contains, how many sentences there are, and how many times each of the overused words appear.
const storySummary = (wholeStory, sentences) => {
  console.log('This story is ' + wholeStory.length + ' words long.');
  console.log('There are ' + sentences + ' sentences in this story.');
  //Comment out the next 3 lines if you used the optional betterWordsLean function to remove all overused words from the text.
  console.log('You used the word "really" ' + reallyCount + ' times.');
  console.log('You used the word "very" ' + veryCount + ' times.');
  console.log('You used the word "basically" ' + basicallyCount + ' times.');
  console.log('');
};


//Logs story summary info based on our improved story array and sentence counter.
//Remember to replace betterWords with betterWordsLean if you used the optional function to remove all overused words!
storySummary(betterWords, sentenceCounter);


//Logs the improved story as one string.
//Remember to replace betterWords with betterWordsLean if you used the optional function to remove all overused words!
console.log(betterWords.join(' '));
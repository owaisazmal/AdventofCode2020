// Advent of Code 2020 - Day 6 Part Two: Custom Customs
const fs = require('fs');
const input = fs.readFileSync('input6.txt', 'utf8');
const groups = input.trim().split('\n\n'); // Splitting groups by blank lines: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//function to count questions everyone answered "yes" to in a group
function countEveryoneYes(group) {
  const people = group.split('\n'); //spliting the group into each person's answers
  
  const firstPersonAnswers = new Set(people[0]); //use first person's answers as base: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  // Check each question in the first person's answers
  return Array.from(firstPersonAnswers).filter(question =>
    people.every(person => person.includes(question)) // Keep questions all people answered "yes": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  ).length;
}

// Sum up counts for all groups
let totalYesCount = 0;

for (let group of groups) {

  totalYesCount += countEveryoneYes(group); //add count for each group
}

console.log(`${totalYesCount}`); // Print result

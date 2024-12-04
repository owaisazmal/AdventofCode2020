// Advent of Code 2020 - Day 6: Custom Customs
const fs = require('fs');
const input = fs.readFileSync('input6.txt', 'utf8');
const groups = input.trim().split('\n\n'); //splitting groups by blank lines: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//function to count unique "yes" answers in a group
function countUniqueYes(group) {
  const uniqueAnswers = new Set(); // Set to store unique answers: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  // Add each person's answers to the set
  group.split('\n').forEach(person => {
    for (let char of person) {
      uniqueAnswers.add(char); // Add answer to set
    }
  });

  return uniqueAnswers.size; // Return the count of unique answers
}

// Sum up counts for all groups
let totalYesCount = 0;

for (let group of groups) {
  totalYesCount += countUniqueYes(group); // Add count for each group
}

console.log(`${totalYesCount}`); // Print result

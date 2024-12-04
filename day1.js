// --Advent of Code 2020 - Day 1: Report Repair--
const fs = require('fs'); // importing fs to read the file    https://nodejs.org/api/fs.html#file-system
const input = fs.readFileSync('input.txt', 'utf8'); //read file synchronusly https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
const numbers = input.split('\n').map(Number); //Split text into array of nums  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Function for finding two nums that add to 2020, it returns product of those numbers
function findTwoEntriesProduct(numbers, target = 2020) {
  const seen = new Set(); // Make set to store nums we already checked

  // loop through every number
  for (let num of numbers) {
    const complement = target - num; // calculate the second number we need
    if (seen.has(complement)) { // if we saw this second number before
      return num * complement; // return their multiply
    }
    seen.add(num); // add number to the seen list
  }

  return null; // return null if we didnt find
}

// Run the function and print the answer
const result = findTwoEntriesProduct(numbers);
console.log(`${result}`);

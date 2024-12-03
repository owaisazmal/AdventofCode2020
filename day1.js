// --Advent of Code 2020 - Day 1: Report Repair--
const fs = require('fs'); // importing fs to read the file    https://nodejs.org/api/fs.html#file-system

// Read the input file, it have numbers
const input = fs.readFileSync('input.txt', 'utf8'); // Using readFileSync for sync read file

// Split numbers into array and change them to Numbers
const numbers = input.split('\n').map(Number); // .split makes array of lines

/**
 * Function for finding two nums that add to 2020
 * It returns product of those numbers
 */
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

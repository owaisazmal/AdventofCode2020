// Advent of Code 2020 - Day 9: Encoding Error
const fs = require('fs');
const input = fs.readFileSync('input9.txt', 'utf8'); 
const numbers = input.trim().split('\n').map(Number); 

const PREAMBLE_LENGTH = 25; 

//function to check if a number is a valid sum of two numbers in the preamble
function isValid(preamble, target) {
  const seen = new Set(); // Set to store numbers for quick lookup: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  for (let num of preamble) {
    const complement = target - num; // Calculate the complement
    if (seen.has(complement)) {
      return true; // Found a pair that adds to the target
    }
    seen.add(num); // Add the number to the set
  }

  return false; // No valid pair found
}
function findFirstInvalid(numbers, preambleLength) {
  for (let i = preambleLength; i < numbers.length; i++) {
    const preamble = numbers.slice(i - preambleLength, i); // Get the current preamble
    if (!isValid(preamble, numbers[i])) {
      return numbers[i]; // Return the invalid number
    }
  }

  return -1; //return -1 if all numbers are valid
}
const firstInvalidNumber = findFirstInvalid(numbers, PREAMBLE_LENGTH);
console.log(`${firstInvalidNumber}`); // Print the result

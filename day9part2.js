// Advent of Code 2020 - Day 9 Part Two: Encoding Error
const fs = require('fs');
const input = fs.readFileSync('input9.txt', 'utf8'); 
const numbers = input.trim().split('\n').map(Number); 

const PREAMBLE_LENGTH = 25; 

//function to check if a number is a valid sum of two numbers in the preamble
function findFirstInvalid(numbers, preambleLength) {
  for (let i = preambleLength; i < numbers.length; i++) {
    const preamble = numbers.slice(i - preambleLength, i); // Get the current preamble
    const target = numbers[i]; // Current number to check
    const isValid = preamble.some((num, index) => preamble.slice(index + 1).includes(target - num)); // Check if valid

    if (!isValid) return target; // Return the invalid number
  }
  return -1; // If all numbers are valid
}

function findEncryptionWeakness(numbers, target) {
  for (let start = 0; start < numbers.length; start++) {
    let sum = 0; // Initialize sum
    for (let end = start; end < numbers.length; end++) {
      sum += numbers[end]; // Add current number to sum
      if (sum === target) {
        const range = numbers.slice(start, end + 1); // Get the contiguous range
        return Math.min(...range) + Math.max(...range); // Return the sum of the smallest and largest numbers
      } else if (sum > target) {
        break; // If sum exceeds target, stop adding
      }
    }
  }
  return -1; // If no range is found
}

// Solve the problem
const firstInvalidNumber = findFirstInvalid(numbers, PREAMBLE_LENGTH);
const encryptionWeakness = findEncryptionWeakness(numbers, firstInvalidNumber);

console.log(`${encryptionWeakness}`); // Print the result

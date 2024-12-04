// Advent of Code 2020 - Day 1 Part Two
const fs = require('fs'); //import fs module for readin file: https://nodejs.org/api/fs.html

// Read input file
const input = fs.readFileSync('input.txt', 'utf8'); //read file synchronusly: https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
const numbers = input.split('\n').map(Number); //Split text into array of nums: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


function findThreeEntriesProduct(numbers, target = 2020) {// Find three nums that adds to 2020 returns product of those nums
  // Loop to try every combinations of three nums
  for (let i = 0; i < numbers.length; i++) {
     
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        
        // Check if their sum is 2020
        if (numbers[i] + numbers[j] + numbers[k] === target) {
          return numbers[i] * numbers[j] * numbers[k]; // Return product
        }
      }
    }
  }

  return null; // Return null if no valid triplet is found
}

// Call the function to get result
const result = findThreeEntriesProduct(numbers);

if (result) {
  console.log(`The product of the three numbers is: ${result}`); // Print result
} else {
  console.log('Couldnt find three nums that adds to 2020.'); // Error message if not found
}

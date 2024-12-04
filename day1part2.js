// Advent of Code 2020 - Day 1 Part Two
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const numbers = input.split('\n').map(Number); 


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
  console.log(`${result}`); // Print result
}

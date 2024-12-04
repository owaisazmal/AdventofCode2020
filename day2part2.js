// Advent of Code 2020 - Day 2 Part Two
const fs = require('fs'); // Import fs module for file readin: https://nodejs.org/api/fs.html

// Read the input file
const input = fs.readFileSync('input2.txt', 'utf8'); //Reading file synchronously   https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
const lines = input.trim().split('\n'); //split file content by line    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// //Function for validating password based on position rules
function countValidPasswords(lines) {
  let validCount = 0; // Counter for valid passwords

  // Loop through each line
  for (let line of lines) {
    const [range, letterWithColon, password] = line.split(' '); // Split line into parts
    const [pos1, pos2] = range.split('-').map(Number); // Get positions (1-based index): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const letter = letterWithColon[0]; // Removing the colon from letter

    // Check if only one of the positions contain the letter
    const isValid =
      (password[pos1 - 1] === letter) ^ (password[pos2 - 1] === letter); // XOR operator checks if only one is true: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

    if (isValid) {
      validCount++; //Increment if password is valid
    }
  }

  return validCount; //return total valid passwords
}

//solve the problem
const result = countValidPasswords(lines);

console.log(`${result}`); // Print the result

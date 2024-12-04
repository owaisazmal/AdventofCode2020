// -- Advent of Code 2020 - Day 2: Password Philosophy --
const fs = require('fs'); //importing fs to read the file  https://nodejs.org/api/fs.html#file-system

//read the input file (input2.txt for day2)
const input = fs.readFileSync('input2.txt', 'utf8'); //Read file synchronously: https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
const lines = input.trim().split('\n'); // Split file into lines (remove extra spaces)

//Function to validate passwords
function countValidPasswords(lines) {
  
    let validCount = 0; // Counter for valid passwords

  // Loop through each line
  for (let line of lines) {
    // Parse the policy and password
    const [range, letterWithColon, password] = line.split(' '); //Split string by spaces: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    
    const [min, max] = range.split('-').map(Number); // Get min and max
    const letter = letterWithColon[0]; // Remove the colon from the letter

    // Count occurrences of the letter in the password
    const count = password.split('').filter(char => char === letter).length;

    // Check if the count is within the range
    if (count >= min && count <= max) {
      validCount++;
    }
  }

  return validCount; // Return the number of valid passwords
}

// Solve the problem
const result = countValidPasswords(lines);
console.log(`${result}`);

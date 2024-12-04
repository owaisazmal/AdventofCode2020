// Advent of Code 2020 - Day 5: Binary Boarding

const fs = require('fs');

const input = fs.readFileSync('input5.txt', 'utf8'); 
const boardingPasses = input.trim().split('\n'); 

//function to decode seat from boarding pass
function getSeatID(pass) {
  // Replace F/L with 0 and B/R with 1 to treat as binary
  const binary = pass.replace(/F|L/g, '0').replace(/B|R/g, '1'); // regex replace  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  
  const row = parseInt(binary.slice(0, 7), 2); //first 7 chars for row       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  const col = parseInt(binary.slice(7), 2); //last 3 chars for column
  
  return row * 8 + col; //calculating the seat ID
}

// Find the highest seat ID
let highestSeatID = 0;

for (let pass of boardingPasses) {
  const seatID = getSeatID(pass); //get seat ID
  if (seatID > highestSeatID) {

    highestSeatID = seatID; //update highest ID
  }
}

console.log(`${highestSeatID}`); // Print result

// Advent of Code 2020 - Day 5 Part Two: Find Your Seat
const fs = require('fs');

const input = fs.readFileSync('input5.txt', 'utf8'); 
const boardingPasses = input.trim().split('\n'); 

//function to decode seat from boarding pass
function getSeatID(pass) {
    // Replace F/L with 0 and B/R with 1 to treat as binary
    const binary = pass.replace(/F|L/g, '0').replace(/B|R/g, '1'); //regex replace  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    
    const row = parseInt(binary.slice(0, 7), 2); //first 7 chars for row       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    const col = parseInt(binary.slice(7), 2); //last 3 chars for column
    
    return row * 8 + col; //calculating the seat ID
  }


  // Get all seat IDs
const seatIDs = boardingPasses.map(getSeatID); // Map boarding passes to seat IDs 

// Sort seat IDs to find the missing one
seatIDs.sort((a, b) => a - b); // Sort numbers
// Find the missing seat ID
let mySeatID = -1;

for (let i = 1; i < seatIDs.length; i++) {
  if (seatIDs[i] - seatIDs[i - 1] > 1) {
    mySeatID = seatIDs[i - 1] + 1; // Find the gap and assign my seat ID
    break;
  }
}

console.log(`${mySeatID}`); // Print the result

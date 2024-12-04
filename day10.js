// Advent of Code 2020 - Day 10: Adapter Array
const fs = require('fs');
const input = fs.readFileSync('input10.txt', 'utf8'); 
const adapters = input.trim().split('\n').map(Number);

// Add the charging outlet (0 jolts) and device's built-in adapter [(max + 3 jolts)
adapters.push(0); // Charging outlet joltage
adapters.push(Math.max(...adapters) + 3); // Device built-in adapter
adapters.sort((a, b) => a - b); // Sort numbers      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Count differences
let diff1 = 0;
let diff3 = 0;

for (let i = 1; i < adapters.length; i++) {
  const difference = adapters[i] - adapters[i - 1]; // Calculate difference between consecutive adapters
  if (difference === 1) {
    diff1++; // Count 1- jolt differences
  
} else if (difference === 3) {
    diff3++; // Count 3-jolt differences

}
}

// Calculate result
const result = diff1 * diff3; // Multiply 1-jolt and 3-jolt differences
console.log(`${result}`);

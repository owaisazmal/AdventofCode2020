// Advent of Code 2020 - Day 10 Part Two: Adapter Array
const fs = require('fs');
const input = fs.readFileSync('input10.txt', 'utf8'); 
const adapters = input.trim().split('\n').map(Number);

// Add the charging outlet (0 jolts) and device's built-in adapter (max + 3 jolts)
adapters.push(0); // Charging outlet joltage
adapters.push(Math.max(...adapters) + 3); // Device built-in adapter

// Sort adapters in ascending order
adapters.sort((a, b) => a - b); 

//function to count distinct arrangements
function countArrangements(adapters) {
  const paths = Array(adapters.length).fill(0); // Create array to store paths for each adapter
  paths[0] = 1; // Only one way to reach the first adapter

  for (let i = 1; i < adapters.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (adapters[i] - adapters[j] <= 3) {
        paths[i] += paths[j]; // Add paths from compatible adapter
      } else {
        break; // Stop checking further if difference is greater than 3
      }
    }
  }

  return paths[paths.length - 1]; // The last adapter has the total paths
}

const totalArrangements = countArrangements(adapters);
console.log(`${totalArrangements}`); 

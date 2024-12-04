// Advent of Code 2020 - Day 3 Part Two: Toboggan Trajectory
const fs = require('fs'); //Import fs modlue for file reading   https://nodejs.org/api/fs.html

// Read the input file
const input = fs.readFileSync('input3.txt', 'utf8'); //read file synchronously   https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
const map = input.trim().split('\n'); //split the map into lines   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//function to count the number of trees on a given slope
function countTreesOnSlope(map, right, down) {

    let treeCount = 0; // Counter for trees
  let position = 0; // Current position in the row

  // Loop through the map rows with step of `down`
  for (let i = 0; i < map.length; i += down) {
    const row = map[i]; // Get the row for current position

    // Check if there's a tree at the current position
    if (row[position % row.length] === '#') {
      treeCount++; // Increment tree counter
    }

    position += right; // Move to the right by the given steps

}

  return treeCount; // Return the total trees counted

}


// List of slopes to check
const slopes = [
  [1, 1], // Right 1, down 1
  [3, 1], // Right 3, down 1
  [5, 1], // Right 5,down 1
  [7, 1], // Right 7, Down 1
  [1, 2]  // Right 1, down 2
];

// Calculate trees for all slopes and multiply the results
let totalProduct = 1; // Start with 1 for multiplication

for (let [right, down] of slopes) {

  const trees = countTreesOnSlope(map, right, down); // Count trees for each slope
  
  totalProduct *= trees; // Multiply the result
  //console.log(`Slope right ${right}, down ${down} encountered ${trees} trees.`); // Loging each slope result for checking logical error
}

console.log(`${totalProduct}`); // Final result

// Advent of Code 2020 - Day 3: Toboggan Trajectory
const fs = require('fs'); //Import fs modlue for file reading   https://nodejs.org/api/fs.html

// Read the input file
const input = fs.readFileSync('input3.txt', 'utf8'); //read file synchronously   https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
const map = input.trim().split('\n'); //split the map into lines   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Function to count the number of trees on a given slope
function countTreesOnSlope(map, right, down) {
  let treeCount = 0; // Counter for trees
  let position = 0; // Current position in the row

  // Loop through the map rows with step of `down`
  for (let i = 0; i < map.length; i += down) {
    const row = map[i]; // Current row of the map

    // Check if there's a tree (#) at the current position
    if (row[position % row.length] === '#') {
      treeCount++; //Increment tree counter
    }

    position += right; // Move to the right by given steps
  }

  return treeCount; // Return total number of trees encountered
}

// Solve the problem with a slope of right 3 and down 1
const result = countTreesOnSlope(map, 3, 1);

console.log(`${result}`); // Print the result

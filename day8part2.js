// Advent of Code 2020 - Day 8 Part Two: Handheld Halting
const fs = require('fs');
const input = fs.readFileSync('input8.txt', 'utf8');
const instructions = input.trim().split('\n'); 

//function to run the program and check if it terminates
function runProgram(instructions) {
    
  let accumulator = 0; 
  let currentIndex = 0; 
  const visited = new Set(); // Track visited instructions   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  while (!visited.has(currentIndex)) {
    if (currentIndex === instructions.length) {
      // Program terminates if index is at the end
      return { terminated: true, accumulator };
    }

    visited.add(currentIndex); // Mark current instruction as visited

    const [operation, argument] = instructions[currentIndex].split(' '); // Split operation and argument
    const value = parseInt(argument, 10); 

    if (operation === 'acc') {
      accumulator += value; //update accumulator
      currentIndex++; //move to next instruction
    } else if (operation === 'jmp') {
      currentIndex += value; //jump to new instruction
    } else if (operation === 'nop') {
      currentIndex++; //no operation, go to the next instruction
    }
  }

  return { terminated: false, accumulator }; //return if infinite loop detected
}

//function to fix the program by changing one `jmp` to `nop` or `nop` to `jmp`
function fixProgram(instructions) {
  for (let i = 0; i < instructions.length; i++) {
    const [operation, argument] = instructions[i].split(' ');

    // Skip if it's an `acc` instruction
    if (operation === 'acc') continue;

    // Create a copy of instructions and swap `jmp` with `nop` or vice versa
    const modifiedInstructions = [...instructions];
    modifiedInstructions[i] =
      operation === 'jmp' ? `nop ${argument}` : `jmp ${argument}`;

    // Run the modified program
    const result = runProgram(modifiedInstructions);

    if (result.terminated) {
      // If program terminates, return the accumulator
      return result.accumulator;
    }
  }

  throw new Error('No solution found'); // Should not reach here if there's a valid solution
}
const result = fixProgram(instructions);
console.log(`${result}`); // Print the result

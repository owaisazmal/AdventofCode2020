// Advent of Code 2020 - Day 8: Handheld Halting
const fs = require('fs');
const input = fs.readFileSync('input8.txt', 'utf8');
const instructions = input.trim().split('\n');

//function to run the program and detect infinite loops
function runProgram(instructions) {
  let accumulator = 0; 
  let currentIndex = 0; 
  const visited = new Set(); //track visited instructions   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  while (!visited.has(currentIndex) && currentIndex < instructions.length) {
    visited.add(currentIndex); //mark instruction as visited

    const [operation, argument] = instructions[currentIndex].split(' '); //split operation and argument
    const value = parseInt(argument, 10); // Parse the argument  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

    if (operation === 'acc') {
      accumulator += value; //update accumulator
      currentIndex++; //move to next instruction
    } else if (operation === 'jmp') {
      currentIndex += value; //jump to a different instruction
    } else if (operation === 'nop') {
      currentIndex++; //no operation, go to the next instruction
    }
  }

  return accumulator; //return the accumulator value before the loop
}
const result = runProgram(instructions);
console.log(`${result}`); //print the result

// Advent of Code 2020 - Day 7: Handy Haversacks

const fs = require('fs');
const input = fs.readFileSync('input7.txt', 'utf8');
const rules = input.trim().split('\n');

// Parse rules into a map
const bagMap = new Map(); // Using map to store bag rules    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

rules.forEach(rule => {
  const [bag, contents] = rule.split(' bags contain '); //split the bag type and its contents
  
  const innerBags = contents.split(', ').map(content => {
    const match = content.match(/(\d+) ([a-z ]+) bag/); //match number and bag color

    return match ? match[2] : null; //return bag color or null
  }).filter(Boolean); //filter out null values
  bagMap.set(bag, innerBags); //added to the map
});

//function to check if a bag can eventually contain the target bag
function canContainTarget(bag, target) {
  if (!bagMap.has(bag)) return false; // If no rule exists for the bag
  const contents = bagMap.get(bag); //getting the list of bags it contains
  
  if (contents.includes(target)) return true; // If it directly contains the target bag

  return contents.some(innerBag => canContainTarget(innerBag, target)); //check recursively
}

//count bags that can eventually contain "shiny gold"
let count = 0;

for (let bag of bagMap.keys()) {
  if (canContainTarget(bag, 'shiny gold')) {
    count++; //increment if the bag can contain shiny gold
  }
}

console.log(`${count}`); //print result

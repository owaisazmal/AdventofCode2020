// Advent of Code 2020 - Day 7 Part Two: Handy Haversacks
const fs = require('fs');
const input = fs.readFileSync('input7.txt', 'utf8');
const rules = input.trim().split('\n');

// Parse rules into a map
const bagMap = new Map();

rules.forEach(rule => {
  const [bag, contents] = rule.split(' bags contain '); //split the bag type and its contents
  const innerBags = contents.split(', ').map(content => {

    const match = content.match(/(\d+) ([a-z ]+) bag/); //match number and bag color
    return match ? { count: parseInt(match[1]), color: match[2] } : null; //return bag count and color or null
  }).filter(Boolean); //filter out null values
  
  bagMap.set(bag, innerBags); //add to the map
});

//function to count total bags inside a given bag
function countTotalBags(bag) {
  if (!bagMap.has(bag)) return 0; //if no rule exists for the bag
  const contents = bagMap.get(bag); //get the list of bags it contains

  //count the total bags inside by summing up counts recursively
  return contents.reduce((sum, innerBag) => {
    return sum + innerBag.count + innerBag.count * countTotalBags(innerBag.color); //add current bag count and its nested bags
  }, 0); //initialize sum to 0
}

//solve the problem for "shiny gold" bag
const totalBags = countTotalBags('shiny gold');
console.log(`${totalBags}`); //print result

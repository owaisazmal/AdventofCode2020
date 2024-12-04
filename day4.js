// Advent of Code 2020 - Day 4: Passport Processing
const fs = require('fs'); 
const input = fs.readFileSync('input4.txt', 'utf8');

// Parse the input into passports
const passports = input.split('\n\n').map(passport => {

  return passport.split(/\s+/).reduce((fields, field) => {
    const [key, value] = field.split(':'); // Split key and value (splitting explained in challenge 2 and learnyounode)
    fields[key] = value;
    return fields;
  }, {});
}); //splitting passports by blank lines  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//function to validate passport
function isValidPassport(passport) {
  
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; // All required fields

  // Check if all required fields exist in passport
  return requiredFields.every(field => field in passport); // Check every field: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

// Count valid passports
let validCount = 0;

for (let passport of passports) {
  
    if (isValidPassport(passport)) {
    validCount++; // Increment counter if valid
  }
}

console.log(`${validCount}`); // Print the result

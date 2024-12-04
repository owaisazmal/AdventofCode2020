// Advent of Code 2020 - Day 4 Part Two: Passport Processing

const fs = require('fs');
const input = fs.readFileSync('input4.txt', 'utf8');

// Parse the input into passports
const passports = input.split('\n\n').map(passport => {

  return passport.split(/\s+/).reduce((fields, field) => {
    
    const [key, value] = field.split(':'); // Split key and value
    fields[key] = value;
    return fields;
  
}, {});
}); // Splitting passports by blank lines     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

/**
 * Validation rules for each field
 */
const validators = {
  byr: value => /^\d{4}$/.test(value) && +value >= 1920 && +value <= 2002, // Birth Year
  iyr: value => /^\d{4}$/.test(value) && +value >= 2010 && +value <= 2020, // Issue Year
  eyr: value => /^\d{4}$/.test(value) && +value >= 2020 && +value <= 2030, // Expiration Year
  hgt: value => {
    const match = /^(\d+)(cm|in)$/.exec(value); // Match height with unit
    if (!match) return false;
    const [_, num, unit] = match;
    if (unit === 'cm') return +num >= 150 && +num <= 193;
    if (unit === 'in') return +num >= 59 && +num <= 76;
    return false;
  },
  hcl: value => /^#[0-9a-f]{6}$/.test(value), // Hair Color
  ecl: value => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value), // Eye Color
  pid: value => /^\d{9}$/.test(value), // Passport ID
  cid: () => true // Country ID (ignored)
};

/**
 * Function to validate passport
 * @param {Object} passport - A passport object with key-value pairs
 * @returns {boolean} - True if passport is valid, false otherwise
 */
function isValidPassport(passport) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; // All required fields

  // Check if all required fields exist in passport and validate each
  return requiredFields.every(field => field in passport && validators[field](passport[field])); // Validation logic: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

// Count valid passports
let validCount = 0;

for (let passport of passports) {
  if (isValidPassport(passport)) {
    validCount++; // Increment counter if valid
  }
}

console.log(`${validCount}`); // Print the result

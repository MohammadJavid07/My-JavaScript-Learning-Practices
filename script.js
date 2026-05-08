// How to mask an Email using JavaScript
function maskEmail(email){
 let atIndex = email.indexOf("@");
 let userNameToMask = email.slice(0,atIndex);
 let domain = email.slice(atIndex);
 let firstChar = userNameToMask[0];
 let lastChar = userNameToMask[userNameToMask.length-1];
 let stars = "*".repeat(userNameToMask.length-2);
 return firstChar + stars+ lastChar+domain;
}
let email = "javidmiakhil63@gmail.com";
console.log(maskEmail(email));

// To convert Celsuis to Fehrenheit using functions
function convertCtoF(temperatureInCelsius){
  let temperatureInFahrenheit = temperatureInCelsius * (9/5)+32;
  return temperatureInFahrenheit;

}
 
 let temperatureInCelsius = convertCtoF(0);

//Loan qualification checker app using else-if chain
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

//Build a Card Counting Assistant
let count = 0;

function cardCounter(card) {
  // Increase count for low cards
  if (card >= 2 && card <= 6) {
    count++;
  }
  // Decrease count for high cards
  else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }
  // 7, 8, 9 → no change

  // Decide action
  let decision = count > 0 ? "Bet" : "Hold";

  return count + " " + decision;
}

// Leap year testing using functions
 function isLeapYear(number){
 if(number % 4 == 0){
   if(number % 100 != 0){
     return `${number} is a leap year.`;
   }
   if (number % 400 == 0){
     return `${number} is a leap year.`;
   }
   else {
     return `${number} is not a leap year.`
   }
 }
 
 }
 let year = 2024;
 let result = isLeapYear(year);
 console.log(result);

// To truncate a string using function
function truncateString(str1, num){
  if(str1.length > num){
    return str1.slice(0,num) + "...";
  }
  else {
    return str1;
  }
}
let number = "A-tisket a-tasket A green and yellow basket".length;
let myString = "A-tisket a-tasket A green and yellow basket"
console.log(truncateString(myString, number));

// Arrow function
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};

console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."

// a Golf score translator game
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par,strokes){
if(strokes === 1){
  return "Hole-in-one!";
}
else if(strokes <= par-2){
  return "Eagle";
}
else if(strokes === par-1){
  return "Birdie";
}
else if(strokes === par){
  return "Par";
}
else if(strokes === par+1){
  return "Bogey";
}
else if(strokes === par+2){
  return "Double Bogey";
}
else if(strokes >= par+3){
  return "Go Home!";
}
}
console.log(golfScore(3,1));

function normalizeUnits(manifest) {
  // Create a copy of the original object
  const normalizedManifest = { ...manifest };

  // Convert pounds to kilograms if needed
  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45;
    normalizedManifest.unit = "kg";
  }

  return normalizedManifest;
}

function validateManifest(manifest) {
  // Create a new object for validation errors
  const errors = {};

  // containerId validation
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination validation
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight validation
  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit validation
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  // hazmat validation
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);

  // Check if there are validation errors
  if (Object.keys(validationResult).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);

    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
}
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

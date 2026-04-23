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

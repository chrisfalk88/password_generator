// Constants
const generateBtn = document.querySelector("#generate");
let specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let selectedCriteria = [];



// Functions

// Function to take test user input between number min and max
function lengthCheck() {
  while (parseInt(inputLength) < 8 || parseInt(inputLength) > 128) {
    inputLength = prompt("Please make your password inbetween 8 and 128 characters");
  }
}

//Function to concat Upper to selected Critieria array
function upperCheck() {
  if (inputUpper) {
    selectedCriteria.push(upperChar);
  }
}

//Function to concat Lower to selected Critieria array
function lowerCheck() {
  if (inputLower) {
    selectedCriteria.push(lowerChar);
  }
}

//Function to concat Special to selected Critieria array
function specialCheck() {
  if (inputSpecial) {
    selectedCriteria.push(specialChar);
  }
}

//Function to concat Num to selected Critieria array
function numCheck() {
  if (inputNum) {
    selectedCriteria.push(numChar);
  }
}

// Function that generates the password 
function generatePassword() {

  // Run all the functions to determine what criteria we need to include
  upperCheck();
  lowerCheck();
  specialCheck();
  numCheck();

  // add all flagged arrays into one array
  let passwordCriteria = selectedCriteria.flat(1);

  // Password is currently blank! We need to make a better one
  let password = ""; 

  // for loop that generates the password
  for (i = 0; i < parseInt(inputLength); i ++) {
    password = password + (passwordCriteria[Math.floor((Math.random() * passwordCriteria.length))]);

  }

  return password;
}

// Writes the password to the text field in the HTML
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Main Process

let inputLength = prompt("Please enter password length");
lengthCheck();
let inputUpper = confirm("Would you like Uppercase Letters?");
let inputLower = confirm("Would you like Lowercase Letters?");
let inputSpecial = confirm("Would you like Special Characters?");
let inputNum = confirm("Would you like Numbers?");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

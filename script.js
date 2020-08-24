// Constants
const generateBtn = document.querySelector("#generate");
let specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let selectedCriteria = [];
let inputLength = prompt("Please enter password length");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to take test user input between number min and max
function lengthCheck() {
  while (parseInt(inputLength) < 8 || parseInt(inputLength) > 128 ) {
    inputLength = prompt("Please make your password inbetween 8 and 128 characters");
    console.log(inputLength);
  }
}


/**
 * generate a password based on certain criteria
 */
function generatePassword() {

  // Password is currently blank! We need to make a better one
  let password = "";





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

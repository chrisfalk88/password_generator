// Constants
const generateBtn = document.querySelector("#generate");
let specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let selectedCriteria = [];

let inputLength;
let inputUpper;
let inputLower;
let inputSpecial;
let inputNum;

// Functions

// Function to take test user input between number min and max
function lengthCheck() {
  while (parseInt(inputLength) < 8 || parseInt(inputLength) > 128 || inputLength ===  null) {
    inputLength = prompt("Please make your password inbetween 8 and 128 characters");
  }
}

//Function to push selected input to selectCriteria array
function inputCheck(inputType, typeArray) {
  if (inputType) {
    selectedCriteria.push(typeArray);
  }
}


// Function that generates the password 
function generatePassword() {

  // Upon click, ask for inputs 
  inputLength = prompt("Please enter password length");
  lengthCheck();
  inputUpper = confirm("Would you like Uppercase Letters?");
  inputLower = confirm("Would you like Lowercase Letters?");
  inputSpecial = confirm("Would you like Special Characters?");
  inputNum = confirm("Would you like Numbers?");

  // checks if user did not select any requirements and then repeats prompts 
  while (!inputUpper && !inputLower && !inputSpecial && !inputNum ) {
    alert("You need to select some criteria")
    inputUpper = confirm("Would you like Uppercase Letters?");
    inputLower = confirm("Would you like Lowercase Letters?");
    inputSpecial = confirm("Would you like Special Characters?");
    inputNum = confirm("Would you like Numbers?");
  }


  // call inputCheck function for all input types 
  inputCheck(inputUpper, upperChar);
  inputCheck(inputLower, lowerChar);
  inputCheck(inputSpecial, specialChar);
  inputCheck(inputNum, numChar);


  //flatten selectedCriteria into one array 
  selectedCriteria = selectedCriteria.flat(1);

  // Password is currently blank! We need to make a better one
  let password = "";

  // for loop that generates the password
  for (i = 0; i < parseInt(inputLength); i++) {
    password = password + (selectedCriteria[Math.floor((Math.random() * selectedCriteria.length))]);
  }

  return password;
}


// Writes the password to the text field in the HTML
function writePassword() { 

  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

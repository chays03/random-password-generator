// Random password generator

// Characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "-", "+", "~"];

// Password creation 
var passwordLength;
var passwordArray = [];

// Function to prompt user to enter password perameters 
function buildPassword() {
  passwordLength = window.prompt("How long should your password be? Please enter a number between 8 and 128.");
    while (passwordLength < 8 || length > 128) {
      if (passwordLength < 8) {
        passwordLength = window.prompt("Sorry, please pick a longer password.");
      }
      else if (passwordLength > 128) {
        passwordLength = window.prompt("Sorry, please pick a shorter password.");
      }
}

// Confirmation of password length 
window.alert("Perfect! Your password will have " + passwordLength + " characters.");

// Confirming password requirements
var special = confirm("Include Special characters? (ex: @, &, %, etc.)");
var lower = confirm("Include lowercase characters?");
var upper = confirm("Include UPPERCASE characters?");
var number = confirm("Include Numbers (0-9)?");


// Conditional statement to force them to choose OK
if (lower === false &&
  upper === false &&
  number === false &&
  special === false) {
  alert("Choose at least one character.");
  return;
}
var passwordRequirements = {
  length: passwordLength,
  lower: lower,
  upper: upper,
  number: number,
  special: special
};

return passwordRequirements;
}

function randomPassword(array) {
  var random = Math.floor(Math.random() * array.length);
  var random1 = array[random];

  return random1;
}

// Function to actually create the password 
function generatePassword() {
  var userInfo = buildPassword();
  var passwordCharacters = [];
  if (userInfo.lower) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
  }
  if (userInfo.upper) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  }
  if (userInfo.number) {
    passwordCharacters = passwordCharacters.concat(number);
  }
  if (userInfo.special) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
  }
  for (var i = 0; i < userInfo.length; i++) {
    passwordArray.push(randomPassword(passwordCharacters));
  }
  return passwordArray.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
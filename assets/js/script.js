// Get password length
var passwordLength = window.prompt("How long should your password be?");

// Get the characters to be used as booleans
var characterCriteria = [
  window.confirm("Use lowercase letters?"),
  window.confirm("Use uppercase letters?"),
  window.confirm("Use numeric characters?"),
  window.confirm("Use special characters?")
];

var generatePassword = function() {
  var validCharType = false;
  var charType;
  var passwordString = "";
  
  for(i = 0; i < passwordLength; i++) {
    do {
      charType = Math.floor(Math.random() * 4);
      validCharType = characterCriteria[charType];
    } while(!validCharType);
    switch(charType) {
      case 0:
        passwordString = passwordString + generateRandomChar(97, 26);
        break;
      case 1:
        passwordString = passwordString + generateRandomChar(65, 26);
        break;
      case 2:
        passwordString = passwordString + generateRandomChar(48, 9);
        break;
      case 3:
        passwordString = passwordString + generateRandomChar(33, 15);
        break;
      default:
        window.alert("Error, you went out of bounds. Fix the code.");
    }
  }

  return passwordString;
}

var generateRandomChar = function(min, length) {
  var unicodeNumber = Math.floor((Math.random() * length) + min);
  var randomChar = String.fromCharCode(unicodeNumber);

  return randomChar;
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

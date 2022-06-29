// This loop prevents the user from entering a non-number value or a number outside 8-128 in the length variable.
// I imagine there's a way to prevent floats from being entered too, but my attempts caused the variable to permanently become a float.
var getPasswordLength = function() {
  do {
    // Get password length
    var passwordLength = parseInt(window.prompt("How long should your password be? (8-128)"));
    if(passwordLength < 8 || passwordLength > 128 || !Number.isInteger(passwordLength)) {
      window.alert("Your length needs to be a number between 8-128.");
    }
  } while(passwordLength < 8 || passwordLength > 128 || !Number.isInteger(passwordLength));

  return passwordLength;
}
// This loop makes sure the user selects at least one character type for their password.
var typeSelected = false;
do {
  // Get the characters to be used as booleans
  var characterCriteria = [
    window.confirm("Use lowercase letters?"),
    window.confirm("Use uppercase letters?"),
    window.confirm("Use numeric characters?"),
    window.confirm("Use special characters?")
  ];
  
  // Check if any characters have been selected
  for(i = 0; i < characterCriteria.length - 1; i++) {
    if(characterCriteria[i] === true) {
      typeSelected = true;
      break;
    }
  }
  if(typeSelected === false) {
    window.alert("You need to select at least one character type.")
  }
} while (typeSelected === false);

var generatePassword = function() {
  var validCharType = false;
  var charType;
  var passwordString = "";
  var passwordLength = getPasswordLength();
  // var 
  
  
  for(i = 0; i < passwordLength; i++) {

    // Generate a number that corresponds to one of the char types and if the user excluded that
    // type, repeat until an included type is found.
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
        window.alert("Out of bounds. Let the programmer know if this happens.");
    }
  }

  return passwordString;
}

// Generate a random unicode char that will appended to the password string.
// Min is the minimum unicode id for that group of chars.
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

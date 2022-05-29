// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charLength, charLower, charUpper, charNumber, charSpecial, upperBoolean, lowerBoolean, numberBoolean, specialBoolean;
// Write password to the #password input
function writePassword() {

  //Charecter length needs to be found
  charLength = window.prompt("Welcome to Password Generator! Please select a charecter length between 8-128")
  
  if (charLength < 8) {
    alert("Must choose a value of atleast 8!");
    writePassword();
  }

  if (charLength > 128) {
    alert("Must choose a value no more than 128!");
    writePassword();
  }
  console.log(charLength)
  //Types of charecters desired given boolean values

  charChoice();

  function charChoice() {

  upperBoolean = confirm("If you would like to use UPPERCASE letters select 'OK'. If not, select 'CANCEL'");
  lowerBoolean = confirm("If you would like to use lowercase letters select 'OK'. If not, select 'CANCEL'");
  numberBoolean = confirm("If you would like to use Numbers select 'OK'. If not, select 'CANCEL'");
  specialBoolean = confirm("If you would like to use Šp€©Ïå£ charecters select 'OK'. If not, select 'CANCEL'");

  if(upperBoolean === false && lowerBoolean === false && numberBoolean === false && specialBoolean === false) {
    alert("Must choose types of charecters!")
    charChoice();
  }

  if(upperBoolean===true) {
    //array math goes here
    charUpper = (upperArray[Math.floor(Math.random()* 10)]);
    console.log(charUpper)
  }
  if(lowerBoolean===true){
    charLower = (lowerArray[Math.floor(Math.random()* 10)]);
    console.log(charLower)

  }
  if(numberBoolean===true){
    charNumber = (numberArray[Math.floor(Math.random()* 10)]);
    console.log(charNumber)

  }
  if(specialBoolean===true){
    charSpecial = (specialArray[Math.floor(Math.random()* 10)]);
    console.log(charSpecial)

  }
  }




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
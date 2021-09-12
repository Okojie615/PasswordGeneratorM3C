// HTML IDs
const generateBtn = document.getElementById('generate');
const resultVar = document.getElementById('password');
const uppercaseVar = document.getElementById('uppercaseStatus');
const lowercaseVar = document.getElementById('lowercaseStatus');
const numbersVar = document.getElementById('numbersStatus');
const symbolsVar = document.getElementById('symbolsStatus');
const lengthVar = document.getElementById('passwordLength');



//Function calling criteria functions
const randomizerFunction = {
  upper: alphaUppercase,
  lower: alphaLowercase,
  number: numbericFunc,
  symbol: symbolFunc
};

//Event listener that displays generated password to HTML ID to be shown
generateBtn.addEventListener('click', () => {
  const length = +lengthVar.value;
  const uppercaseTrue = uppercaseVar.checked;
  const lowercaseTrue = lowercaseVar.checked;
  const numbersTrue = numbersVar.checked;
  const symbolsTrue = symbolsVar.checked;

  resultVar.innerHTML = randomizedPassword(

    uppercaseTrue, 
    lowercaseTrue, 
    numbersTrue, 
    symbolsTrue,
    length);
});

//Function that makes random password
function randomizedPassword(upper, lower, number, symbol, length) {
  let randomizedPassword = '';

  const checkedUnchecked = upper + lower + number + symbol;

  const typesArray = [{upper}, {lower}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  )

  if(checkedUnchecked === 0) {
    return '';
  }

  if(length > 128 || length < 8) {
    return '';
  }
  
for (let i = 0; i < length; i += checkedUnchecked) {
    typesArray.forEach(type => {
      const functionName = Object.keys(type)[0];
      randomizedPassword += randomizerFunction[functionName]();
    });
  }

  const randomPassword = (randomizedPassword.slice(0, length));
  return randomPassword;
}

//Databank for usable characters
var charsetAlphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsetAlphaLower = "abcdefghijklmnopqrstuvwxyz";
var charsetNumeric = "0123456789";
var charsetSymbol = "!#$%&'()*+,-./:<=>?@[]^_`{|}~;";

// Pull numbers, letters, and symbols at random
function alphaUppercase() {
  return charsetAlphaUpper[Math.floor (Math.random() * charsetAlphaUpper.length)];
};

function alphaLowercase() {
  return charsetAlphaLower[Math.floor (Math.random() * charsetAlphaLower.length)];
};
function numbericFunc() {
  return charsetNumeric[Math.floor (Math.random() * charsetNumeric.length)];
};
function symbolFunc() {
  return charsetSymbol[Math.floor (Math.random() * charsetSymbol.length)];
};

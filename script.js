//This will link both the number scroll and the number box 
var charRange = document.getElementById('charRange')
var charAmount = document.getElementById('charAmount')
var IncludeUpperLettersElement = document.getElementById ("IncludeUpperLetters")
var IncludeNumbersElement = document.getElementById("IncludeNumbers")
var IncludeSymbolsElement = document.getElementById("IncludeSymbols")
var form = document.getElementById("PasswordGenerator")
var passwordDisplay = document.getElementById("passwordDisplay")

var LowerLetter_Char_Codes = arrayFromLowtoHigh(97, 122)
var UpperLetter_Char_Codes = arrayFromLowtoHigh(65, 90)
var Numbers_Char_Codes = arrayFromLowtoHigh(33, 47)
var Symbols_Char_Codes = arrayFromLowtoHigh(48, 57).concat(arrayFromLowtoHigh(58, 64)
).concat( arrayFromLowtoHigh(91, 96)
).concat( arrayFromLowtoHigh(123, 126)
);

charAmount.addEventListener('input', syncCharacterAmount)
charRange.addEventListener('input', syncCharacterAmount)

// im calling this event to ensure that the form is stopped from submitting and regenerating the page
form.addEventListener('submit', e => {
e.preventDefault()
var characterAmount = charAmount.value
var IncludeUpperLetters = IncludeUpperLettersElement.checked
var IncludeNumbers = IncludeNumbersElement.checked
var IncludeSymbols = IncludeSymbolsElement.checked
var password = generatePassword(characterAmount, IncludeUpperLetters, IncludeSymbols,
    IncludeNumbers)
    passwordDisplay.innerText = password
})

/* The following function is whats going to generate the password characters for our generator.
 There is many ways to write the code for the password generating function, i researhed chose to use charcodes (character codes )
because they were easier to understand and much cleaner*/
function generatePassword(characterAmount, IncludeUpperLetters, 
    IncludeNumbers, IncludeSymbols) {
   let CharCodes = LowerLetter_Char_Codes 
   if (IncludeUpperLetters) CharCodes = CharCodes.concat(UpperLetter_Char_Codes)
   if (IncludeNumbers) CharCodes = CharCodes.concat(Numbers_Char_Codes)
   if (IncludeSymbols) CharCodes = CharCodes.concat(Symbols_Char_Codes)

   var passwordCharacters = []
   for(let i = 0; i < characterAmount; i++) {
       var CharacterCode = CharCodes[Math.floor(Math.random() * 
        CharCodes.length)]
       passwordCharacters.push(String.fromCharCode(CharacterCode))
    }
   return passwordCharacters.join("")
}

function arrayFromLowtoHigh(low, high) {
var array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
     return array
}

function syncCharacterAmount(e) {
    var value = e.target.value
    charAmount.value = value
    charRange.value = value
}






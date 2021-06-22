//This will link both the number scroll and the number box 
var charRange = document.getElementById('charRange')
var charAmount = document.getElementById('charAmount')
var IncludeUpperLettersElement = document.getElementById ("IncludeUpperLetters")
var IncludeNumbersElement = document.getElementById("IncludeNumbers")
var IncludeSymbolsElement = document.getElementById("IncludeSymbols")
var form = document.getElementById("PasswordGenerator")
var passwordDisplay = document.getElementById("passwordDisplay")

// The following lines of code sets the character codes for all the numbers, symbols and letters.
var LowerLetter_Char_Codes = arrayFromLowtoHigh(97, 122)
var UpperLetter_Char_Codes = arrayFromLowtoHigh(65, 90)
var Numbers_Char_Codes = arrayFromLowtoHigh(33, 47)
// for the symbols character codes, i used the concat method to join all the symbol strings together, since there is breaks in the character code list.
var Symbols_Char_Codes = arrayFromLowtoHigh(48, 57).concat(arrayFromLowtoHigh(58, 64)
).concat( arrayFromLowtoHigh(91, 96)
).concat( arrayFromLowtoHigh(123, 126)
);

// This addEventListener syncs the number input and the range input together, so when you interact with one the other is affected.
charAmount.addEventListener('input', syncCharacterAmount)
charRange.addEventListener('input', syncCharacterAmount)

// im calling this event to ensure that the form is stopped from submitting and regenerating the page
form.addEventListener('submit', e => {
e.preventDefault()
var characterAmount = charAmount.value
// This tells us true or false whether the button is checked.
var IncludeUpperLetters = IncludeUpperLettersElement.checked
var IncludeNumbers = IncludeNumbersElement.checked
var IncludeSymbols = IncludeSymbolsElement.checked
var password = generatePassword(characterAmount, IncludeUpperLetters, IncludeSymbols,
    IncludeNumbers)
// This ensures that the password is displayed.
    passwordDisplay.innerText = password
})

/* The following function is whats going to generate the password characters for our generator.
 There is many ways to write the code for the password generating function, i researhed chose to use charcodes (character codes )
because they were easier to understand and much cleaner*/
function generatePassword(characterAmount, IncludeUpperLetters, 
    IncludeNumbers, IncludeSymbols) {
// this variable sets lower case letters as the default 
   let CharCodes = LowerLetter_Char_Codes 
// The following three lines make it so that when the boxes are checked it'll append upon those character codes.
   if (IncludeUpperLetters) CharCodes = CharCodes.concat(UpperLetter_Char_Codes)
   if (IncludeNumbers) CharCodes = CharCodes.concat(Numbers_Char_Codes)
   if (IncludeSymbols) CharCodes = CharCodes.concat(Symbols_Char_Codes)

   // The following 'for' loop lets 'i' equal 0 when its less than our character amount and adds one each time. this will loop once for each character.
   var passwordCharacters = []
   for(let i = 0; i < characterAmount; i++) {
    // the math function gives me a random number between 0 and the character amount and gives us the character code 
       var CharacterCode = CharCodes[Math.floor(Math.random() * 
        CharCodes.length)]
       passwordCharacters.push(String.fromCharCode(CharacterCode))
    }
// this returns the array into a string 
   return passwordCharacters.join("")
}

/* This fuction generates the character code arrays. its set to read the array from low to high. 
inside the function the is a 'for' loop that goes from a variable 'i' and adds a value until it reaches the highest number*/
function arrayFromLowtoHigh(low, high) {
var array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
     return array
}

// This is the function that allows the range and the amount to be linked. It takes the event argument and gives out the value.
function syncCharacterAmount(e) {
    var value = e.target.value
    charAmount.value = value
    charRange.value = value
}






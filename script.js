const textCheck = document.getElementById('text-input')
const subButton = document.getElementById('check-btn');
const testResult = document.getElementById('result');

function palCheck(string) {
let cleanString = string.replace(/\s/g, '')
.replace(/[^a-zA-Z0-9]/g, '')
.toUpperCase();
let reverseString = cleanString.split("")
        .reverse()
        .join("");

if(!string) {
   alert("Please input a value") 
}
else if (cleanString === reverseString){
    testResult.innerText = `${string} is a palindrome`
}
else {
    testResult.innerText = `${string} is not a palindrome`
}

}
subButton.addEventListener("click", () =>
palCheck(textCheck.value))

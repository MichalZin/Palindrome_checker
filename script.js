const textCheck = document.getElementById('text-input')
const subButton = document.getElementById('check-btn');
const testResult = document.getElementById('result');

function palCheck(string) {
let cleanString = string.replace(/\s/g, '');
let strNonAl = cleanString.replace(/[^a-zA-Z0-9]/g, '');
let strFin = strNonAl.toUpperCase();

let revStr = strFin.split("")
        .reverse()
        .join("");

if(!string) {
   alert("Please input a value") 
}
else if (strFin === revStr){
    testResult.innerText = `${string} is a palindrome`
}
else {
    testResult.innerText = `${string} is not a palindrome`
}

}

subButton.onclick = function () {
    palCheck(textCheck.value)
};

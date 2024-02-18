const textCheck = document.getElementById('text-input')
const subButton = document.getElementById('check-btn');
const testResult = document.getElementById('result');
/*
function palCheck(string) {
     function reverseString(string) {
        let str = string
        let stringFilter = str.replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase();
        let stringRev = stringFilter.split("")
        .reverse()
        .join("");
        return stringRev;
    }
    */
   
    function reverseString(string) {
        let stringFilter = stringNoSpaces.replace(/[^a-zA-Z0-9]/\s/g, '').toLowerCase();
        let stringRev = stringFilter.split("").reverse().join("");
        return stringRev;
    }
    
    function palCheck(string) {

        let stringWithoutSpaces = string.replace(/\s/g, '')
        if (!string) {
            return "Please input a value";
        } else if (stringWithoutSpaces === reversedString) {
            return `${string} is a palindrome`;
        } else {
            return `${string} is not a palindrome`;
        }
    }

    /*
    if (!string) {
        let noResult = `Please input a value`
        return noResult;
    }
    else if (string === reverseString(string)) {
        let opResultPositive = `${string} is a palindrome`
        return opResultPositive;
    }
    else {
        let opResultNegative = `${string} is not a palindrome`
        return opResultNegative;
    }

}
*/
subButton.addEventListener("click", () => {
    let inputString = textCheck.value
    let finalResult = palCheck(inputString);
    testResult.innerText = finalResult;
})
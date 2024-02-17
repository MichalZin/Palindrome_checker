const textCheck = document.getElementById('text-input')
const subButton = document.getElementById('check-btn');
const testResult = document.getElementById('result');

function palCheck(string) {
    function reverseString(string) {
        let stringFilter = string.match(/[a-zA-Z0-9]+/g)
            .join("")
            .toLowerCase();
        let stringRev = stringFilter.split("")
        .reverse()
        .join("");
        return stringRev;
    }

    if (string === reverseString(string)) {
        let opResultPositive = `${string} is a palindrome`
        return opResultPositive;
    }
    else {
        let opResultNegative = `${string} is not a palindrome`
        return opResultNegative;
    }

}

subButton.addEventListener("click", () => {
    let finalResult = palCheck(textCheck.value);
    testResult.innerHTML = finalResult;
})
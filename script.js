
function palCheck(string) {
    function reverseString(string) {
        let copy = string.split("")
        .reverse()
        .join("")
        return copy;
    }
    /*
    function reverse(string) {
        let filter = /^[a-zA-Z0-9]+$/;
        let exchange = string.match(filter)
        .toUpperCase()
        .split("")
        .reverse().
        join("");
        return exchange
    }
    */

    if (string === reverseString(string)) {
        console.log("It's a palindrome");
    }
    else {
        console.log("It's not a palindrome");
    }

}
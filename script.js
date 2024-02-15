
function palCheck(string) {
    function reverse(string) {
        let filter = /^[a-zA-Z0-9]+$/;
        let exchange = string.match(filter)
        .toUpperCase()
        .split("")
        .reverse().
        join("");
        return exchange
    }
    

    if (stringOne === reverse(string)) {
        console.log("It's a palindrome")
    }
    else {
        console.log("It's not a palindrome")
    }

}
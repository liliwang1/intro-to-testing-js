// helloWorld function 
function helloWorld() {
    return "Hello, World!";
    // console.log("Hello World!");
}
// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    // if (input === "Alex") {
    //     return "Hello Alex!";
    // } else if(input === "Pat"){
    //     return "Hello Pat!";
    // } else {
    //     return "Hello Jane!";
    // }

    // if (input === undefined || input === true || input === false) {
    //     return "Hello World!";
    // } else {
    //     return "Hello " + input + "!";
    // }

    if (typeof input === "string") {
        return "Hello " + input + "!";
    } else {
        return "Hello World!";
    }
}

function isFive(a) {
    return a == 5;
}

function isEven(b) {
    return typeof b === "number" && b % 2 === 0;
}

function isVowel(c) {
    var vowel = "aeiouAEIOU";
    return vowel.indexOf(c) !== -1;
}




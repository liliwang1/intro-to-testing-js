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
    if (a == 5) {
        return true;
    } else {
        return false;
    }
}
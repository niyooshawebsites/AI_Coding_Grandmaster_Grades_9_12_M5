// callback functions in js

// callback function is a function that is passed as an argument to another function

// example
function add(num1, num2, callback) {
        const result = num1 + num2;
        callback(result);
    }
    
function printResult(result) {
    console.log(result);
}
    
add(5, 3, printResult);
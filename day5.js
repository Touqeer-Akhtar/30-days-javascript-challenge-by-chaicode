// Task 1 (odd or even)
function evenOrOdd(num) {
    if (num%2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

evenOrOdd(10);


// Task 2 (square)
function square(num) {
    return num*num
}

console.log(square(5));


// Task 3
const findMaximum = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater");
    } else {
        console.log(num2 + " is greater");
    }
}

findMaximum(5,2)


// Task 4
const concatStrings = function (str1, str2) {
    return str1 + str2
}

console.log(concatStrings("Hello", " JS"));


// Task 5
const twoNumSum = (num1, num2) => {
    return num1 + num2
}

console.log(twoNumSum(1, 2));


// Task 6
const checkLetter = (letter, word) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            return true
        } else {
            return false
        }
    }
}

console.log(checkLetter("h", "hello"));


// Task 7
function withDefaultVal(num1, num2 = 2) {
    return num1 * num2
}

console.log(withDefaultVal(2));     // 4
console.log(withDefaultVal(2,3));   // 6


// Task 8
function greeting(name, age = 18) {
    return `Hello ${name}, are you ${age} years old?`
}

console.log(greeting("Harry"));     // age = 18 default
console.log(greeting("Harry", 20)); // age = 20


// Task 9
function callFuncNTimes(func, times) {
    for (let i = 1; i <= times; i++) {
        func()
    }
}

callFuncNTimes(function () {
    console.log("Hello");
}, 5)


// Task 10
function callBackFuncTwo(func1, func2, value) {
    let resFromFunc1 = func1(value)
    let finalRes = func2(resFromFunc1)
    console.log(finalRes);
}


const func1 = function (valueFromMain) {
    return valueFromMain + " valFromfunc1"
}

function func2(resFromFunc1) {
    return resFromFunc1 + " valFromFunc2"
}

callBackFuncTwo(func1, func2, "valFromMain")
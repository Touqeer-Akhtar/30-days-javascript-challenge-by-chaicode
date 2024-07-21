// Task 1
let personName = "Rahul"
let age = 20
console.log(`name is ${personName} and age is ${age}`);

// Task 2
let line1 = "Hello, how are you?"
let line2 = "I'm nine"
console.log(`${line1} ${line2}`);

// Task 3
let arr3 = [1, 2, 3, 4]
let [num1, num2] = arr3
console.log(num1, num2);

// Task 4
let bookObj = {
    title: "Harry Putter",
    author: "Ramesh Babu"
}

let {title, author} = bookObj
console.log(title, author);

// Task 5
let additionalElements = [5, 6, 7, 8, 9, 10]
let newArr5 = [...arr3, ...additionalElements, age]

console.log(newArr5);

// Task 6
function sum(...nums) {
    console.log(nums);
    return nums.reduce((previousVal, currentVal) => previousVal + currentVal)
}

let result = sum(1, 2, 3, 4)
console.log(result);

// Task 7
function product(num1, num2 = 1) {
    return num1*num2
}

console.log(product(3, 5));

// Task 8       (object literals enhancement)
let dogName = "Kaalu"
let color = "Black"
let dogAge = 5
function bark() {
    console.log("Bhaw Bhaw");
}

let dogObj = {dogName, color, dogAge, bark}
console.log(dogObj);

// Task 9
let isAdult = "isAdult"

let computedObj = {
    userName: "John Doe",
    [isAdult]: true
}

console.log(computedObj);
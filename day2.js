// Task 1

let num1 = 5
let num2 = 2

console.log(num1+num2);

// Task 2
console.log(num1-num2);

// Task 3
console.log(num1*num2);

// Task 4
console.log(num1/num2);

// Task 5
console.log(num1%num2);

// Task 6
num1 += 5
console.log(num1);

// Task 7
num1 -= 5
console.log(num1);

// Task 8
console.log(num1>num2);     // true
console.log(num1<num2);     // false

// Task 9
console.log(num1>=num2);     // true
console.log(num1<=num2);     // false

// Task 10
let a = true
let b = "0"

console.log(a==1);     // true
console.log(a===1);     // false

console.log(b==0);      // true
console.log(b===0);     // false

// Task 11

let c = 3
let d = 5

if (c>2 && d>5) {
    console.log("both condition true");
} else {
    console.log("atleast one of them false");
}

// Task 12 

if (c>3 || d>4) {
    console.log("atleast one of them is true");
} else {
    console.log("none satisfied");
}

// Task 13

if (typeof c != "number") {
    console.log("not a number");
} else {
    console.log("it's a number");
}


// Task 14

c > 0? console.log("positive") : console.log("negetive");
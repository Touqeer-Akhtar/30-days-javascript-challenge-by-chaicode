// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2
let num2 = 5
for (let i = 1; i <= 10; i++) {
    console.log(num2*i);
}


// Task 3
let sum = 0
let i = 1
while (i <= 10) {
    sum = sum + i
    i++
}
console.log(sum);


// Task 4
let num4 = 10
while (num4 >= 1) {
    console.log(num4);
    num4--
}


// Task 5
let num5 = 1
do {
    console.log(num5);
    num5++
} while (num5 <= 5);


// Task 6
let num6 = 4
let factorial = 1
do {
    factorial = factorial*num6
    num6--
} while (num6 >= 1);

console.log(factorial);


// Task 7    (pattern)
for (let i = 1; i <= 5; i++) {
    let star = ""
    for (let j = 1; j <= i; j++) {
        star = star + "*"
    }
    console.log(star);
}


// Task 8   (continue)
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i);
}


// Task 9   (break)
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break
    }
    console.log(i);
}
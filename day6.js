// Task 1
let arr1 = [1, 2, 3, 4, 5]
console.log(arr1);

// Task 2
console.log(arr1[0]);
console.log(arr1[4]);

// Task 3
arr1.push(6)
console.log(arr1);

// Task 4
arr1.pop()
console.log(arr1);

// Task 5
arr1.shift()
console.log(arr1);

// Task 6
arr1.unshift(1)
console.log(arr1);

// Task 7
let newArrMap = arr1.map((val) => {
    return 2*val
})

console.log(newArrMap);

// Task 8
let newArrFill = arr1.filter((val) => {
    if (val % 2 === 0) {
        return val
    }
})
console.log(newArrFill);


// Task 9
let newArrReduce = arr1.reduce((prev, current) => {
    return prev + current
})

console.log(newArrReduce);

// Task 10
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Task 11
arr1.forEach(element => {
    console.log(element);
});

// Task 12
let twoDimensionalArr = [arr1, newArrMap]
console.log(twoDimensionalArr);

// Task 13      // Specific element from 2D array
console.log(twoDimensionalArr[1][2]);
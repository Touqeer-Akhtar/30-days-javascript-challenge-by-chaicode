// Task 1
let num1 = 0
if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negetive");
} else {
    console.log("Num is zero");
}

// Task 2
let personAge = 18
if (personAge >= 18) {
    console.log("Eligibal to vote");
} else {
    console.log("Not eligibal");
}

// Task 3   (nested if-else)

let a = 7
let b = 6
let c = 4

if (a > b) {
    if (a > c) {
        console.log(a + " is the largest between these 3");
    } else {
        console.log(c + " is the largest between these 3");
    }
} else {
    if (b > c) {
        console.log(b + " is the largest between these 3");
    } else {
        console.log(c + " is the largest between these 3");
    }
}

// Task 4
let day = 6

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid value");
        break;
}

// Task 5       (grading by score using "Switch" Statememt)

let score = 90


function gradeFunc() {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade="A"
            break;
        case (score >= 80 && score < 90):
            grade="B"
            break;
        case (score >= 70 && score <= 80):
            grade="C"
            break;
        case (score >= 60 && score <= 70):
            grade="D"
            break;
        case (score >= 0 && score <= 60):
            grade="F"
            break;
    
        default:
            grade="Invalid value"
            break;
    }
    return grade
}

console.log(gradeFunc()); 

// Task 6

let num2 = 3

num2%2 === 0 ? console.log("Even") : console.log("Odd");

// Task 7       (leap year)

let year = 1900

function leapYearChecker() {
    let leapYear;
    switch (true) {
        case (year%400===0):
            leapYear = "It's a leapyear!"
            break;

        case (year%100===0):
            leapYear = "Not a leapyear"
            break;

        case (year%4===0):
            leapYear = "It's a leapyear!"
            break;
    
        default:
            leapYear = "Not a leapyear"
            break;
    }
    return leapYear;
}

console.log(leapYearChecker());
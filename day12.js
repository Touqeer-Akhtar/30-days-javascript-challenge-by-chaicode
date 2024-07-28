// Task 1
function throwErrorFunction() {
    throw new Error("This is a custom error message!")
}

try {
    throwErrorFunction()
} catch (error) {
    console.log(error.name, error.message);
}


// Task 2
function division(num1, num2) {
    if (num2 === 0) {
        throw new Error("Denominator can't be zero")
    } else {
        console.log(num1/num2);
    }
}

try {
    division(8, 2)
} catch (error) {
    console.log(error.name, error.message);
}


// Task 3
function riskeyOperation() {
    let random = Math.random()
    if (random < 0.5) {
        throw new Error("Something went wrong")
    }
    console.log("Risky operation successful!");
}

try {
    riskeyOperation()
} catch (error) {
    console.log(error.name, error.message);
} finally {
    console.log("Finally block executed");
}


// Task 4
class customError extends Error {
    constructor(name, message) {
        super(name, message);
        this.message = message      // finds error.name inglobal error object, error.message is sent by us
    }
}

function throwCustomError() {
    throw new customError("Custom Error: ", "This is a custom error")
    
}

try {
    throwCustomError()
} catch (error) {
    console.log(error.name, error.message);
}


// Task 5
function validateInput(username) {
    if (username === "" || username === undefined) {
        throw new Error("Username can't be blank")
    } else {
        console.log(username);
    }
}

try {
    validateInput()
} catch (error) {
    console.log(error.name, error.message);
}


// Task 6
let prom6 = new Promise((resolve, reject) => {
    let randomNum = Math.random()
    if (randomNum > 0.5) {
        resolve("Promise resolved")
    } else {
        reject("Promise rejected")
    }
})

prom6.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


// Task 7
let prom7 = new Promise((resolve, reject) => {
    let randomNum = Math.random()
    if (randomNum > 0.5) {
        resolve("Promise resolve")
    } else {
        reject("Promise rejected")
    }
})

async function prom7Consume() {
    try {
        let response = await prom7
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

prom7Consume()


// Task 8
fetch("fakeURL").then((res) => {
    return res.json()
})
.then((jsonData) => {
    console.log(jsonData);
}).catch((err) => {
    console.log("Invalid URL");
})


// Task 9
async function getData() {
    try {
        let response = await fetch("fakeURL")
        let jsonData = await response.json()
        console.log(jsonData);
    } catch (error) {
        console.log("Invalid URL");
    }
}

getData()
// Task 1
let bookObj = {
    title: "Harry Potter",
    author: "JK Rolling",
    year: 2012,
    titleAndAuthor: function () {
        return `Books title is ${this.title} and author is ${this.author}`
    },
    updateYear: function (year) {
        this.year = year
    },
    titleAndYear: function () {
        let result = `Books title is ${this.title} and year is ${this.year}`
        console.log(result);
        return result
    }
}

console.log(bookObj);


// Task 2
console.log(bookObj.title);
console.log(bookObj.author);

// Task 3
console.log(bookObj.titleAndAuthor());


// Task 4
bookObj.updateYear(2015)
console.log(bookObj);


// Task 5
let libraryObj = {
    name: "Aarambh",
    books: [
        {
            title: "Harry Potter",
            author: "JK Rolling",
            year: 2012
        },
        {
            title: "Two States",
            author: "Chetan Bhagat",
            year: 2009
        },
        {
            title: "Do Epic Shit",
            author: "Ankur Warikoo",
            year: 1998
        }
    ]
}

console.log(libraryObj);


// Task 6
console.log(libraryObj.name);
console.log(libraryObj.books.map((element) => element.title));


// Task 7
bookObj.titleAndYear()


// Task 8
for (const key in bookObj) {
    console.log(`${key}: ${bookObj[key]}`);
}

// self-note    console.log(bookObj["title"]);       // that's how we access outside loop


// Task 9
console.log(`booksObj keys are ${Object.keys(bookObj)} and booksObj value are ${Object.values(bookObj)}`);

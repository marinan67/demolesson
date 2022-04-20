//Завдання 1
function checkAge(age) {
    if (age >= 18) { // Change this line
        return "You are an adult";
    }

    return "You are a minor";
}

//Завдання 2
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line

    if (password === ADMIN_PASSWORD) {
        return "Welcome!";
    }
    return "Access denied, wrong password!";
    // Change code above this line
}

//Завдання 3

function checkStorage(available, ordered) {
    // Change code below this line

    if (ordered === 0) {
        return "Your order is empty!";
    }

    if (ordered > available) {
        return "Your order is too large, not enough goods in stock!";
    }

    return "The order is accepted, our manager will contact you";

    // Change code above this line
}

//Завдання 4
const fruits = ["apple", "plum", "pear", "orange"]

//Завдання 5

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

//Завдання 6

const fruits = ["apple", "plum", "pear", "orange"];

fruits[1] = "peach";
fruits[3] = "banana";

//Завдання 7

const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length;

//Завдання 8

const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];


//Завдання 9

function getExtremeElements(array) {
    // Change code below this line
    const l = array.length - 1
    const arr = [array[0], array[l]]
    return arr

    // Change code above this line
}

//Завдання 10

function splitMessage(message, delimeter) {
    let words = message.split(delimeter);
    // Change code below this line

    // Change code above this line
    return words;
}

//Завдання 11

unction calculateEngravingPrice(message, pricePerWord) {

    return message.split(' ').length * pricePerWord;
}

//Завдання 12

function makeStringFromArray(array, delimeter) {
    let string = array.join(delimeter);

    return string;
}

//Завдання 13

function slugify(title) {

    return title.toLowerCase().split(' ').join('-')

}

//Завдання 14

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

//Завдання 15

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

//Завдання 16

function makeArray(firstArray, secondArray, maxLength) {
    return firstArray.concat(secondArray).length <= maxLength ? firstArray.concat(secondArray) : firstArray.concat(secondArray).slice(0, maxLength);
}

//Завдання 17

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
    console.log(i);
}


//Завдання 18

function calculateTotal(number) {
    // Change code below this line
    let res = 0
    for (let i = 1; i <= number; i += 1) {
        res += i;
    }
    return res
        // Change code above this line
}

//Завдання 19

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
    const fruit = fruits[i]; // Change this line
    console.log(fruit);
}

//Завдання 20

function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i];
    }
    return total;
}

//Завдання 21

function findLongestWord(string) {
    const arr = string.split(' ');
    let res = '';
    for (let arrs of arr) {

        if (res.length < arrs.length) { res = arrs; }
    }

    return res

}

//Завдання 22

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    // Change code above this line
    return numbers;
}


//Завдання 23

function filterArray(numbers, value) {
    // Change code below this line
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            arr.push(numbers[i]);
        }

    }

    return arr
}

//Завдання 24

function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];

    return fruits.includes(fruit); // Change this line
}

//Завдання 25

function getCommonElements(array1, array2) {
    // Change code below this line
    let res = [];

    for (i = 0; i <= array1.length; i++) {
        if (array2.includes(array1[i])) {
            res.push(array1[i])

        }
    }
    //let res = array1.filter(x => array2.includes(x));
    return res
        // Change code above this line
}

//Завдання 26

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line

    for (orders of order) {
        total += orders;
    }

    // Change code above this line
    return total;
}


//Завдання 27

function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];

    for (number of numbers) {


        if (number > value) {
            filteredNumbers.push(number);
        }
    }

    return filteredNumbers;
    // Change code above this line
}

//Завдання 28

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

//Завдання 29

function getEvenNumbers(start, end) {
    // Change code below this line
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }

    return arr;
}

//Завдання 30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
}

//Завдання 31

function findNumber(start, end, divisor) {
    // Change code below this line

    for (let i = start; i < end; i += 1) {
        if (i % divisor === 0) {
            return i
        }
    }

}

//Завдання 32

function includes(array, value) {
    // Change code below this line
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === value) {
            return true

        }
    }
    return false

}
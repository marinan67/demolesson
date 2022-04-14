//Завдання 1
const productName = 'Droid';
// console.log(pricePerItem);
// 2000
const pricePerItem = 2000;


//Завдання 2
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = "Repair droid";
pricePerItem = pricePerItem + 1500;

//Завдання 3
let topSpeed = 160;
let distance = 617.54;
let login = "mango935";
let isOnline = true;
let isAdmin = false;

//Завдання 4
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;


//Завдання 5
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
let price = 3500;
const message = "You picked Droid, price per item is 3500 credits";

//Завдання 6
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee; // загальна сума замовлення до сплати, не забудь про вартість доставки

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);

//Завдання 7
// Change code below this line
function sayHi() {
    console.log("Hello, this is my first function!");
}
sayHi();

//Завдання 8
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
    // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//Завдання 9
function add(a, b, c) {
    // Change code below this line

    return a + b + c;

    // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//Завдання 10
function makeMessage(name, price) {
    // Change code below this line
    const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
};

makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

//Завдання 11
function calculateTotalPrice(orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;

    // Change code above this line
    return totalPrice;
};

calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);

//Завдання 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


    // Change code above this line
    return message;
}

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

}

//Завдання 13
function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;

    // Change code above this line
    return passed;

    //Завдання 14

    function isValidPassword(password) {
        const SAVED_PASSWORD = 'jqueryismyjam';
        // Change code below this line
        const isMatch = password === SAVED_PASSWORD;

        // Change code above this line
        return isMatch;
    }

    isValidPassword("mangodab3st");
    isValidPassword("kiwirul3z");
    isValidPassword("jqueryismyjam");

    //Завдання 15

    function checkAge(age) {
        let message;

        if (age >= 18) { // Change this line
            message = 'You are an adult';
        } else {
            message = 'You are a minor';
        }

        return message;
    }

    checkAge(20);
    checkAge(8);
    checkAge(14);
    checkAge(38);

    // Завдання 16
    function checkStorage(available, ordered) {
        let message;
        // Change code below this line
        if (available >= ordered) {
            message = `Order is processed, our manager will contact you.`;
        } else {
            message = `Not enough goods in stock!`;
        }
        // Change code above this line
        return message;
    }

    checkStorage(100, 50);
    checkStorage(100, 130);
    checkStorage(200, 20);
    checkStorage(200, 150);
    checkStorage(150, 180);


    //Завдання 17

    let a = 5;
    let b = 10;
    let c = 15;
    let d = 20;

    // Change code below this line
    a += 2;
    b -= 4;
    c *= 3;
    d /= 10;


    //Завдання 18

    function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
        let message;
        let totalPrice = pricePerDroid * orderedQuantity;
        // Change code below this line
        if (customerCredits >= totalPrice) {
            message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
        } else {
            message = `Insufficient funds!`;
        }
        // Change code above this line
        return message;
    }

    makeTransaction(3000, 5, 23000);
    makeTransaction(1000, 3, 15000);
    makeTransaction(2000, 8, 10000);
    makeTransaction(500, 10, 5000);


    //Завдання 19
    function checkPassword(password) {
        const ADMIN_PASSWORD = 'jqueryismyjam';
        let message;

        if (password === null) { // Change this line
            message = 'Canceled by user!';
        } else if (password === ADMIN_PASSWORD) { // Change this line
            message = 'Welcome!';
        } else {
            message = 'Access denied, wrong password!';
        }

        return message;
    }

    checkPassword("mangohackzor");
    checkPassword(null);
    checkPassword("polyhax");
    checkPassword("jqueryismyjam");
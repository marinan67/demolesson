//Завдання 20

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if (ordered === 0) { // Change this line
        message = 'There are no products in the order!';
    } else if (ordered > available) { // Change this line
        message = 'Your order is too large, there are not enough items in stock!';
    } else {
        message = 'The order is accepted, our manager will contact you';
    }
    // Change code above this line
    return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

//Завдання 21

function isNumberInRange(start, end, number) {
    const isInRange = start <= number && number <= end; // Change this line

    return isInRange;
}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);

//Завдання 22

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

    return canAccessContent;
}

//Завдання 23
function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line

    return isNotInRange;
}

//Завдання 24

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT;
    } else if (20000 <= totalSpent && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    } else if (5000 <= totalSpent && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT
    } else {
        discount = BASE_DISCOUNT;
    }

    // Change code above this line
    return discount;
}

//Завдання 25
function checkStorage(available, ordered) {
    let message;
    // Change code below this line

    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

    // Change code above this line
    return message;
}

//Завдання 26
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    message = password === "jqueryismyjam" ? "Access is allowed" : "Access denied, wrong password!";
    // Change code above this line
    return message;
}

//Завдання 27

function getSubscriptionPrice(type) {
    let price;
    // Change code below this line

    switch (type) { // Change this line
        case "starter": // Change this line
            price = 0; // Change this line
            break;

        case "professional": // Change this line
            price = 20; // Change this line
            break;

        case "organization": // Change this line
            price = 50; // Change this line
            break;
    }

    // Change code above this line
    return price;
}

//Завдання 28

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line

    switch (password) { // Change this line
        case ADMIN_PASSWORD: // Change this line
            message = "Welcome!"; // Change this line
            break;

        case null: // Change this line
            message = "Canceled by user!"; // Change this line
            break;

        default: // Change this line
            message = "Access denied, wrong password!"; // Change this line

    }
    return message;
}

//Завдання 29

function getShippingCost(country) {
    let message;
    // Change code below this line
    switch (country) { // Change this line
        case "China": // Change this line
            message = "Shipping to China will cost 100 credits"; // Change this line
            break;

        case "Chile": // Change this line
            message = "Shipping to Chile will cost 250 credits"; // Change this line
            break;

        case "Australia": // Change this line
            message = "Shipping to Australia will cost 170 credits"; // Change this line
            break;

        case "Jamaica": // Change this line
            message = "Shipping to Jamaica will cost 120 credits"; // Change this line
            break;


        default: // Change this line
            message = "Sorry, there is no delivery to your country"; // Change this line

    }
    return message;
}

//Завдання 30

function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line

    return message;
}

//Завдання 31

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];


//Завдання 32

function getSubstring(string, length) {
    const substring = string.slice(0, length); // Change this line

    return substring;
}

//Завдання 33

function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    if (message.length <= maxLength) {
        result = message;
    } else {
        result = message.slice(0, maxLength) + "...";
    }
    /// Change code above this line
    return result;
}

//Завдання 34

function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Change this line

    return normalizedInput;
}

//Завдання 35

function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
    return result;
}

//Завдання 36

function checkForSpam(message) {
    let result;
    result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false
        // Change code below this line

    // Change code above this line
    return result;
}
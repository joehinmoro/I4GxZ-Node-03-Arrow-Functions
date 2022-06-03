// import createInterface method from the readline module
const { createInterface } = require("readline");

// define function to return an integer from 1
const correctNumSelector = (range) => Math.floor(Math.random() * range) + 1;

// DEFINE GLOBAL VARIABLES
// username varaible
let username;
// current level varaible
let currentLevel = 1;
// level range varaible
let range = currentLevel + 1;
// user score varaible
let score = 0;
// review mode toggle varaible
let reviewMode = false;

// define function to return CLI prompt interface
const promptInterface = () => {
    return createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

// exports methods and properties
module.exports = {
    username,
    currentLevel,
    range,
    score,
    reviewMode,
    promptInterface,
    correctNumSelector,
};

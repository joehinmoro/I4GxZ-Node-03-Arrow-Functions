// require readline module
const readline = require("readline");

// define correct answer generator function
const correctNumSelector = (currLevel) => Math.floor(Math.random() * currLevel + 1);

// DEFINE GLOBAL VARIABLES
// username
let username;
// current level
let currentLevel = 0;
// user score
let score = 0;
// review mode toggle
let reviewMode = false;

// prompt interface function
const createInterface = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

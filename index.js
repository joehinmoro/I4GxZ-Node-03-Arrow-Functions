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

//
const promptUsername = (next) => {
    const rl = promptInterface();
    const questionText = `\nWelcome to "Guess the Integer".
You'll be guessing an integer
between 1 and another integer.

What is your username?

`;
    rl.question(questionText, (anwser) => {
        username = anwser;
        rl.close();

        next();
    });
};

const setReviewMode = () => {
    const rl = promptInterface();
    const questionText = `\nReview mode reveals the anwser
so that the reviewer can guess
correctly or wrongly at will in order
to review the code logic

Press 1 to turn on review mode:
Press any other key to it turn off.
`;
    rl.question(questionText, (anwser) => {
        if (anwser == 1) {
            reviewMode = true;
        }
        rl.close();
        newLevel();
    });
};

const newLevel = () => {
    // increment current level and set correct anwser
    // as a random number based on the range (0, currentlevel)
    const correctAnswer = correctNumSelector(range);

    const rl = promptInterface();
    const questionText = `\nLevel ${currentLevel}.
Guess an Integer between 1 and ${range}:
${reviewMode ? `Review Mode: correct answer is ${correctAnswer}` : ""}
`;
    rl.question(questionText, (answer) => {
        answer = parseInt(answer);
        if (answer === correctAnswer) {
            const correctResponse = `\nCORRECT!!!
You guessed ${answer}
and the correct answer is ${correctAnswer}
`;
            console.log(correctResponse);
            rl.close();
            score++;
            currentLevel++;
            range++;
            newLevel();
        } else {
            const failureResponse = `\nWRONG!!!
You guessed ${answer}
and the correct answer is ${correctAnswer}.
\n${username}, you scored ${score}
TRY AGAIN!!!
`;
            console.log(failureResponse);
            rl.close();
        }
    });
};

promptUsername(setReviewMode);
// console.log(username, reviewMode);

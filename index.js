// import createInterface method from the readline module
const { createInterface } = require("readline");

// define function to return an integer from 1 to range argument
const correctAnswerSelector = (range) => Math.floor(Math.random() * range) + 1;

// DEFINE GLOBAL VARIABLES
// user score varaible
let score = 0;
// current level varaible
let currentLevel = 1;
// level range varaible
let range = 2;
// username varaible
let username;
// game status variable
let isAlive = true;
// review mode toggle varaible
let reviewMode = false;

// define function to return CLI prompt interface
const promptInterface = () => {
    return createInterface({
        input: process.stdin,
        output: process.stdout,
    });
};

// function to start game and prompt username
const setUsername = () => {
    // create prompt interface
    const rl = promptInterface();
    // prompt text
    const questionText = `
***********************************************
Welcome to "Guess the Integer".
You'll be guessing an integer
between 1 and another integer.

What is your username?

`;
    // prompt for username
    rl.question(questionText, (userAnwser) => {
        // close prompt interface
        rl.close();
        // set username global var to prompt response
        username = userAnwser;
        // call the (optional) review mode function
        setReviewMode();
    });
};

// function to toggle review mode (expose answer in prompt)
const setReviewMode = () => {
    // create prompt interface
    const rl = promptInterface();
    // prompt text
    const questionText = `
***********************************************
Review mode reveals the anwser
so that the reviewer can guess
correctly or wrongly at will in order
to review the code logic

Reply with 1 to turn on review mode:
Reply with any other key to keep it turned off.
`;
    // prompt to enable review mode
    rl.question(questionText, (anwser) => {
        // close prompt interface
        rl.close();
        // toggle on review mode if prompt response is == 1
        if (anwser == 1) {
            reviewMode = true;
        }
        // call game level function
        gameLevel();
    });
};

// define game level function
const gameLevel = () => {
    // set correct answer variable randomly betweeen 1 and range
    const correctAnswer = correctAnswerSelector(range);
    // create prompt interface
    const rl = promptInterface();
    // prompt text
    const questionText = `
***********************************************
Level ${currentLevel}.
Guess an Integer between 1 and ${range}:
${reviewMode ? `Review Mode: correct answer is ${correctAnswer}` : ""}
`;
    // prompt for user's answer
    rl.question(questionText, (userAnswer) => {
        // close prompt interface
        rl.close();
        // parse user's answer to integer
        userAnswer = parseInt(userAnswer);

        // if user's answer is correct:
        if (userAnswer === correctAnswer) {
            // increment score variable (global) for next level
            score++;
            // increment level variable (global) for next level
            currentLevel++;
            // increment range variable (global) for next level
            range++;
            // define correct answer message
            const correctMessage = `
CORRECT!!!
You guessed ${userAnswer}
and the correct answer is ${correctAnswer}.
Your score is ${score}.`;
            // print correct answer message
            console.log(correctMessage);
            // call game level function  for next level
            gameLevel();
        }
        // if user's answer is wrong:
        else {
            // set game status to false to end game loop
            isAlive = false;
            // define wrong answer message
            const failureResponse = `
WRONG!!!
You guessed ${userAnswer}
and the correct answer is ${correctAnswer}.

***********************************************
${username}, you scored ${score}.
TRY AGAIN!!!
`;
            // print wrong answer message
            console.log(failureResponse);
        }
    });
};

// GAMEPLAY
setUsername();

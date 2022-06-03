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

// function to start game and prompt username
const startGame = () => {
    // create prompt interface
    const rl = promptInterface();
    // prompt text
    const questionText = `\nWelcome to "Guess the Integer".
You'll be guessing an integer
between 1 and another integer.

What is your username?

`;
    // prompt for username
    rl.question(questionText, (anwser) => {
        // close prompt interface
        rl.close();
        // set username global var to prompt response
        username = anwser;
        // call the (optional) review mode function
        setReviewMode();
    });
};

// function to toggle review mode (expose answer in prompt)
const setReviewMode = () => {
    // create prompt interface
    const rl = promptInterface();
    // prompt text
    const questionText = `\nReview mode reveals the anwser
so that the reviewer can guess
correctly or wrongly at will in order
to review the code logic

Press 1 to turn on review mode:
Press any other key to it turn off.
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
        newLevel();
    });
};

// define game level function
const newLevel = () => {
    // set correct answer global var randomly betweeen 1 and range
    const correctAnswer = correctNumSelector(range);
    // create prompt interface
    const rl = promptInterface();
    // prompt text
    const questionText = `\nLevel ${currentLevel}.
Guess an Integer between 1 and ${range}:
${reviewMode ? `Review Mode: correct answer is ${correctAnswer}` : ""}
`;
    // prompt for user's answer
    rl.question(questionText, (answer) => {
        // close prompt interface
        rl.close();
        // parse user's answer to integer
        answer = parseInt(answer);

        // if user's answer is correct:
        if (answer === correctAnswer) {
            // define correct answer message
            const correctMessage = `\nCORRECT!!!
You guessed ${answer}
and the correct answer is ${correctAnswer}
`;
            // print correct answer message
            console.log(correctMessage);
            // increment score var (global)
            score++;
            // increment level var (global)
            currentLevel++;
            // increment range var (global)
            range++;
            // call game level function again for next level
            newLevel();
        }
        // if user's answer is wrong:
        else {
            // define wrong answer message
            const failureResponse = `\nWRONG!!!
You guessed ${answer}
and the correct answer is ${correctAnswer}.
\n${username}, you scored ${score}.
TRY AGAIN!!!
`;
            // print wrong answer message
            console.log(failureResponse);
        }
    });
};

// start game
startGame();

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
const promptUsername = (next) => {
    const rl = createInterface();
    const questionText = `\nWelcome to "Guess the Integer".
You'll guess an integer
between 0(inclusive) and an interger.

What is your username?

`;
    rl.question(questionText, (anwser) => {
        username = anwser;
        rl.close();

        next();
    });
};

const setReviewMode = () => {
    const rl = createInterface();
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
    const correctAnswer = correctNumSelector(++currentLevel);

    const rl = createInterface();
    const questionText = `\nLevel ${currentLevel}.
Guess an Integer between 0 and ${currentLevel}:
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

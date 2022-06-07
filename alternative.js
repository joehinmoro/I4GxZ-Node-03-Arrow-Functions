// define function to return an integer from 1 to range argument
const correctAnswerSelector = (range) => Math.floor(Math.random() * range) + 1;

// DEFINE GLOBAL VARIABLES
// user score varaible
let score = 0;
// current level varaible
let currentLevel = 1;
// level range varaible
let range = 2;
// // game status variable
// let isAlive = true;

// prompt user for username
const username = prompt(
    `Welcome to "Guess the Integer".
You'll be guessing an integer
between 1 and another integer.

What is your username?`
);

// prompt to enable review mode
const reviewMode = parseInt(
    prompt(
        `Review mode reveals the anwser
so that the reviewer can guess
correctly or wrongly at will in order
to review the code logic

Reply with 1 to turn on review mode:
Reply with any other key to keep it turned off.`
    )
);

// GAMEPLAY:
// While users has not guess wrongly, run game play loop block infinitely
// break loop if player guesses wrongly
while (username) {
    // set correct answer variable randomly betweeen 1 and range
    const correctAnswer = correctAnswerSelector(range);
    // prompt for user's answer and parse to integer
    let userAnswer = parseInt(
        prompt(
            `Level ${currentLevel}.
Guess an Integer between 1 and ${range}:
${reviewMode === 1 ? `Review Mode: correct answer is ${correctAnswer}` : ""}`
        )
    );

    if (userAnswer === correctAnswer) {
        // increment score variable (global) for next level
        score++;
        // increment level variable (global) for next level
        currentLevel++;
        // increment range variable (global) for next level
        range++;
        // define correct answer message
        const correctMessage = `CORRECT!!!
You guessed ${userAnswer}
and the correct answer is ${correctAnswer}.
Your score is ${score}.`;
        // print correct answer message
        alert(correctMessage);
    }
    // if user's answer is wrong:
    else {
        // define wrong answer message
        const failureResponse = `WRONG!!!
You guessed ${userAnswer}
and the correct answer is ${correctAnswer}.

${username}, you scored ${score}.
TRY AGAIN!!!`;
        // print wrong answer message
        alert(failureResponse);
        // break loop to end game
        break;
    }
}

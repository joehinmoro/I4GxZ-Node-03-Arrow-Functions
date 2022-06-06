// // define function to return an integer from 1
// const correctAnswerSelector = (range) => Math.floor(Math.random() * range) + 1;

// // DEFINE GLOBAL VARIABLES

// // current level varaible
// let currentLevel = 1;
// // level range varaible
// let range = currentLevel + 1;
// // user score varaible
// let score = 0;
// // review mode toggle varaible
// let reviewMode = false;

// // prompt user for username
// const username = prompt(`\nWelcome to "Guess the Integer".
// You'll be guessing an integer
// between 1 and another integer.

// What is your username?

// `);

// while (username) {
//     // select right answer randomly
//     const correctAnswer = correctAnswerSelector();
//     // prompt for user guess
//     let user_answer = prompt(`prompt message containing ${level} and range. (1 and ${range}).`);
//     // parse user answer as integer
//     user_answer = parseInt(user_answer);
//     // if user is right:
//     if (user_answer === right_answer) {
//         // success message
//         console.log("correct");
//         // increment variable for next level
//         score++;
//         level++;
//         range++;
//     }
//     // if user is wrong:
//     else {
//         // failure message
//         console.log("failure");

//         // print user final score
//         console.log(`${username} and ${score}`);
//         break;
//     }
// }
// // while user hasn't guessed wrongly (isActive is truthy), call level function for each level

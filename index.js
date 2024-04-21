#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Muntazir Mohammad - Number guessing Game!");
let randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-5: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratualtions! You guessed correctly.");
}
else {
    console.log("Oops! Your guess is wrong.");
}

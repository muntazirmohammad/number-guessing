import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 20 + 1);
// console.log(randomNumber)
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-20: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratualtions! You guessed correctly.");
}
else if (answers.userGuessedNumber > randomNumber) {
    console.log("Oops! Your guess is too high.");
}
else {
    console.log("Oops! Your guess is too low.");
}

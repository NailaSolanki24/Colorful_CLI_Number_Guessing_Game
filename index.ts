#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold.italic("\n\tWelcome to Naila Solanki - CLI Number Guessing Game\n"));

const randomNumber = Math.floor(Math.random() * 4 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:chalk.yellowBright("Enter Your Guess Number (Number Limit from 1 to 4):"),
    },
]);

if(answer.userGuessedNumber === randomNumber){
console.log(chalk.blueBright("Congratulations ! You Guess a Correct Number."));
}
else{
    console.log(chalk.greenBright("Sorry, You Guess a Wrong Number."));

}


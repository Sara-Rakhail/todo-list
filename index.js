#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlueBright.italic.bold("Rakhail Codes WellCome You in Todo List"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter your task:"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task Added in Todo List Sucessfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.bgBlackBright("Do you want to add more task?"),
            default: "False",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log(chalk.greenBright("All tasks added in your todo list:"), todoList);

#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([{
            name: "q1",
            message: "What would you like to add in your Todos? ",
            type: "input"
        }, {
            name: "q2",
            message: "Would You Like to Add more in Your Todos? ",
            type: "confirm",
            default: "true"
        }]);
    todos.push(todoQuestions.q1);
    console.log(todos);
    condition = todoQuestions.q2;
}

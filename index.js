const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the manager's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number:"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address:"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineer's GitHub:"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the intern's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the interns's employee ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address:"
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the interns's school:"
    }
]

const defaultMenu = {
    type: "list",
    name: "action",
    message: "What would you like to do next?",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the team."],
    default: "Finish building the team."
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.

/* Ensuring classes work
const manager = new Manager("01", "Bob", "Bob email", 4)
const engineer = new Engineer("01", "Jane", "Jane email", "Jane github")
const intern = new Intern("01", "Steve", "Steve email", 4)
const employee = new Employee("01", "Dan", "Dan email")

console.log(`ID: ${manager.getId()}`)
console.log(`Name: ${manager.getName()}`);
console.log(`Email: ${manager.getEmail()}`);
console.log(`Role: ${manager.getRole()}\n\n`);

console.log(`ID: ${engineer.getId()}`)
console.log(`Name: ${engineer.getName()}`);
console.log(`Email: ${engineer.getEmail()}`);
console.log(`Role: ${engineer.getRole()}\n\n`);

console.log(`ID: ${intern.getId()}`)
console.log(`Name: ${intern.getName()}`);
console.log(`Email: ${intern.getEmail()}`);
console.log(`Role: ${intern.getRole()}\n\n`);

console.log(`ID: ${employee.getId()}`)
console.log(`Name: ${employee.getName()}`);
console.log(`Email: ${employee.getEmail()}`);
console.log(`Role: ${employee.getRole()}\n\n`);
*/
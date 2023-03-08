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
        message: "Please enter the manager's employee ID:",
        validate: (id) => {
            if(/^\d+$/.test(id)){
                if(teamMembers.filter(member => member.getId() === id).length > 0){
                    return `Another employee already has ID: ${id}, please select another`
                }
                else{ return true; }
            }

            return "Please only enter numbers"
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address:",
        validate: (email) => {
            if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){ 
                return true; 
            }
            
            return `You must enter a valid email address`;
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number:",
        validate: (officeNumber) => {
            if(/^\d+$/.test(officeNumber)){ return true; }

            return "Please only enter numbers"
        }
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
        message: "Please enter the engineer's employee ID:",
        validate: (id) => {
            if(/^\d+$/.test(id)){
                if(teamMembers.filter(member => member.getId() === id).length > 0){
                    return `Another employee already has ID: ${id}, please select another`
                }
                else{ return true; }
            }

            return "Please only enter numbers"
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address:",
        validate: (email) => {
            if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){ 
                return true; 
            }
            
            return `You must enter a valid email address`;
        }
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
        message: "Please enter the intern's employee ID:",
        validate: (id) => {
            if(/^\d+$/.test(id)){
                if(teamMembers.filter(member => member.getId() === id).length > 0){
                    return `Another employee already has ID: ${id}, please select another`
                }
                else{ return true; }
            }

            return "Please only enter numbers"
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address:",
        validate: (email) => {
            if(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)){ 
                return true; 
            }
            
            return `You must enter a valid email address`;
        }
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the interns's school:"
    }
]
const menuPrompt = [{
    type: "list",
    name: "action",
    message: "What would you like to do next?",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the team."],
    default: "Finish building the team."
}];

let teamMembers = new Array();

//initialise
inquirer.prompt(managerQuestions).then((manager) => {
    const employee = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
    teamMembers.push(employee);
    mainMenu();
})

const mainMenu = () => {
    inquirer.prompt(menuPrompt).then((selection) => {
        let action = selection.action;

        if(action === "Finish building the team."){
            console.log("Team submitted, building webpage...");
            fs.writeFileSync(outputPath, render(teamMembers));
            console.log(`Webpage created, check ${OUTPUT_DIR} for the result!`);
        }
        else if(action === "Add an Engineer"){
            inquirer.prompt(engineerQuestions).then((engineer) => {
                const employee = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
                teamMembers.push(employee);
                mainMenu();
            })
        }
        else{
            inquirer.prompt(internQuestions).then((intern) => {
                const employee = new Intern(intern.name, intern.id, intern.email, intern.school);
                teamMembers.push(employee);
                mainMenu();
            })
        }
    })
}
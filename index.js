const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const renderHTML = require('./src/renderHTML.js')
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

// Sets root directory to currentlocation/dist
const OUTPUT_DIR = path.resolve(__dirname, "dist");
// Concatenates generated HTML to the root directory, OUTPUT_DIR
const outputPath = path.join(OUTPUT_DIR, "userTeam.html");

const userTeam = [];

// Prompts with list of positions to add
function createTeam () {
  inquirer
    .prompt([{
      type: "list",
      name: "employeeType",
      message: "What type of employee would you like to add?",
      choices: ["Add an Engineer", "Add an Intern", "No more employees to add"]
    }])
    .then((userInput) => {
      if (userInput.employeeType === "Add an Engineer") {
        addEngineer()
      } else if (userInput.employeeType === "Add an Intern") {
        addIntern()
      } else {
        renderFile();
    }
  })
}

// Prompts user for manager info
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },

      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID number?"
      },

      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },

      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
    ])
    .then (userAnswers => {
      const teamManager = new Manager(userAnswers.managerName, userAnswers.managerId, userAnswers.managerEmail, userAnswers.managerOfficeNumber)
      userTeam.push(teamManager);
      createTeam();
    });
}

// Prompts user for engineer info
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID number?"
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }
    ])
    .then (userAnswers => {
      const teamEngineer = new Engineer(userAnswers.engineerName, userAnswers.engineerId, userAnswers.engineerEmail, userAnswers.engineerGithub)
      userTeam.push(teamEngineer);
      createTeam();
    });
}

// Prompts user for intern info
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID number?"
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }
    ])
    .then (userAnswers => {
      const teamIntern = new Intern(userAnswers.internName, userAnswers.internId, userAnswers.internEmail, userAnswers.internSchool)
      userTeam.push(teamIntern);
      createTeam();
    });
}

// Calls for renderHTML.js to render the file with the users input
function renderFile() {
  fs.writeFileSync(outputPath, renderHTML(userTeam), "UTF-8")
  console.log("Team webpage successfully created.")
}

// Sterter function to run all needed processes
function startApp() {
  addManager()
}

startApp()
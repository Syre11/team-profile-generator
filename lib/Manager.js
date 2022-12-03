const inquirer = require("inquirer")

class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getName() {

  }

  getId() {

  }

  getEmail() {

  }

  getRole() {
    return Manager;
  }
}
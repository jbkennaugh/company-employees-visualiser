const Employee = require("./Employee")

class Manager extends Employee {
    constructor(id, name, email, officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
   
    getOfficeNumber(){ return this.officeNumber; }
}

module.exports = Manager;
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    printInfo() {
        console.log(`The employee's name is: ${this.name}`)
        console.log(`The employee's ID is: ${this.id}`)
        console.log(`The employee's email is: ${this.email}`)
    }
}

module.exports = Employee;
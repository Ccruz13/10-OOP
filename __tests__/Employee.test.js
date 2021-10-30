const Employee = require("../lib/Employee.js");

test ('create an employee object', () => {
    const employeeEx = new Employee('Dave', '101', 'daveEx@gmail.com');

    expect(employeeEx.name).toBe('Dave');
    expect(employeeEx.id).toBe('101');
    expect(employeeEx.email).toBe('daveEx@gmail.com');
});

const Employee = require("../lib/Employee.js");

test ('create an employee object', () => {
    const employeeEx = new Employee('Dave', '101', 'daveEx@gmail.com');

    expect(employeeEx.name).toBe('Dave');
    expect(employeeEx.id).toBe('101');
    expect(employeeEx.email).toBe('daveEx@gmail.com');
});

test ('test employee methods', () => {
    const employeeEx = new Employee('Dave', '101', 'daveEx@gmail.com');

    expect(employeeEx.getName()).toBe('Dave');
    expect(employeeEx.getId()).toBe('101');
    expect(employeeEx.getEmail()).toBe('daveEx@gmail.com');
    expect(employeeEx.getRole()).toBe('Employee')
});
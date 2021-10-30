const Manager = require("../lib/Manager");

test('create Manager objects', () => {
    const managerEx = new Manager('Dave', '104', 'test@gmail.com', '123');

    expect(managerEx.name).toBe('Dave');
    expect(managerEx.id).toBe('104');
    expect(managerEx.email).toBe('test@gmail.com');
    expect(managerEx.officeNumber).toBe('123')
}); 

test('test manager objects', () => {
    const managerEx = new Manager('Dave', '104', 'test@gmail.com', '123');

    expect(managerEx.getName()).toBe('Dave');
    expect(managerEx.getId()).toBe('104');
    expect(managerEx.getEmail()).toBe('test@gmail.com');
    expect(managerEx.getOfficeNumber()).toBe('123')
});
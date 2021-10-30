const Engineer = require("../lib/Engineer");

test('create engineer objects', () => {
    const engineerEx = new Engineer('Dave', '102', 'test@gmail.com', 'Dave1');

    expect(engineerEx.name).toBe('Dave');
    expect(engineerEx.id).toBe('102');
    expect(engineerEx.email).toBe('test@gmail.com');
    expect(engineerEx.github).toBe('Dave1')
}); 

test('test engineer methods', () => {
    const engineerEx = new Engineer('Dave', '102', 'test@gmail.com', 'Dave1');

    expect(engineerEx.getName()).toBe('Dave');
    expect(engineerEx.getId()).toBe('102');
    expect(engineerEx.getEmail()).toBe('test@gmail.com');
    expect(engineerEx.getGithub()).toBe('Dave1');
    expect(engineerEx.getRole()).toBe('Engineer');
});
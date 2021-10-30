const Intern = require('../lib/Inter');

test('create intern objects', () => {
    const internEx = new Intern('Dave', '103', 'test@gmail.com', 'Rutgers');

    expect(internEx.name).toBe('Dave');
    expect(internEx.id).toBe('103');
    expect(internEx.email).toBe('test@gmail.com');
    expect(internEx.school).toBe('Rutgers');
});

test('test intern objects', () => {
    const internEx = new Intern('Dave', '103', 'test@gmail.com', 'Rutgers');

    expect(internEx.getName()).toBe('Dave');
    expect(internEx.getId()).toBe('103');
    expect(internEx.getEmail()).toBe('test@gmail.com');
    expect(internEx.getSchool()).toBe('Rutgers');
});
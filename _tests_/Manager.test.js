const Manager = require('../lib/Manager');

test('checks if number is received for office number property', () => {
    const manager = new Manager(555);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})
const Intern = require('../lib/Intern');

test('check to see if the school property receives a string', () => {
    const intern = new Intern('Texas Tech');

    expect(intern.school).toEqual(expect.any(String));
})
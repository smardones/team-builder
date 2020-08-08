const Engineer = require('../lib/Engineer');

test('check to see if username receives string', () => {
    const engineer = new Engineer('smardone');

    expect(engineer.githubUsername).toEqual(expect.any(String));
})
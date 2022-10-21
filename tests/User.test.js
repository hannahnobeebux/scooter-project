const User = require('../src/User')

// User tests here
describe('creating a new user', () => {
    // tests here!
    beforeEach(() => {
      user = new User("user-hannah", "myPassword", 18);
    });

// test username

    test('the username has been inputted correctly', () => { 
        expect(user.username).toBe("user-hannah")
    });

    test('the password has been inputted correctly', () => { 
        expect(user.password).toBe("myPassword")
    });

    test('the age has been inputted correctly', () => { 
        expect(user.age).toBe(18)
    });

});

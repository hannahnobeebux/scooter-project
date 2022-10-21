const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

describe("testing functions when a user uses ScooterApp", () => {
    const user = new User("user-hannah", "password", 18)
    const scooterApp = new ScooterApp()
    const firstResult = scooterApp.register(user)
    const secondResult = scooterApp.register(user)
    test('creating a new user to put into registeredUsers', () => {
        expect(firstResult).toBe("user has been registered")
    })
    test('testing for a user that already exists', () => {
        expect(secondResult).toBe("already registered")
    })

    test('registering a user that doesnt exist', () => {
        expect(scooterApp.register("user-john")).toBe("user has been registered")
    })

    const youngUser = new User("user-john", "password", 15)
    test('testing for a user that is too young', () => {
        expect(scooterApp.register(youngUser)).toBe("too young to register!")
    })

    // log in
    test('logging into scooter app with a valid user', () => {
        const user2 = new User("user-steve", "password", 20)
        scooterApp.register(user2)
        scooterApp.logIn(user2.username, user2.password)
        expect(scooterApp.logIn(user2.username, user2.password)).toBe("User has logged in successfully")
        //expect(user2.loggedIn).toBe(true)
    })

    // CREATING VARIABLES THAT WILL BE USED FOR ADDING AND REMOVING SCOOTERS 
    const user3 = new User("user-bob", "myPAssword", 21)
    const newScooter = new Scooter("Manhattan", user3)    

// add scooter
    test('adding a scooter', () => {
        expect(scooterApp.addScooter("Manhattan", newScooter)).toBe("Scooter successfully added")
    })


// remove scooter
    test('removing a scooter', () => {
        expect(scooterApp.removeScooter(newScooter)).toBe("removed successfully")

    })

})

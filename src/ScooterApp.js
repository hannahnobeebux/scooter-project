const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    ScooterApp.scooterSessions.push()
    this.stations = []
    // An array of objects 
    this.registeredUsers = []
  } 
  static scooterSessions = []

  register(user){
    if (this.registeredUsers.includes(user)) {
      console.log("already registered")
    } else if (user.age < 17) {
      console.log("too young to register!")
    } else {
      // this.registeredUsers.push(user)
      this.registeredUsers.forEach(function (user) {
        user.name = name; 
        user.password = password; 
        user.age = age; 
        user.loggedIn = false; 
        user.accountChange = 0;
      })
      console.log("user has been registered")
    }
  }

  logIn(username, password){
    if (this.registeredUsers.includes(username)){

    }

  }

  addScooter(location, scooter){
    scooter.station = location 
    this.stations.push(scooter)
  }

  RemoveScooter(scooterToRemove){
    serialNumber = scooterToRemove.serialNumber
  }
}

module.exports = ScooterApp

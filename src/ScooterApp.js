const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    
    // All the available stations
    this.stations = {
      "Manhattan": [],
      "Brooklyn": [],
      "Queens": [],
      "Bronx": [],
      "StatenIsland": []
    }
    // An array of objects 
    this.registeredUsers = []
    ScooterApp.scooterSessions.push(ScooterApp)
  } 
  static scooterSessions = []

  register(user){
    let newUser = {}
    newUser["username"] = user.username
    newUser["password"] = user.password 
    newUser["age"] = user.age 
    newUser["loggedIn"] = false; 
    newUser["accountChange"] = 0;

    if (user.age < 17) {
        console.log("too young to register!")
        return "too young to register!"
    } else {

    for (let i=0; i<this.registeredUsers.length; i++){
      if(this.registeredUsers[i].username === user.username){
        console.log("already registered")
        return "already registered"
      }
    }


        this.registeredUsers.push(newUser)
        
        console.log("user has been registered")
        return "user has been registered"
     
    }
  }



  logIn(username, password){
    let userPassword; 
    let userUsername; 
    let userObject = {};

    let counter = -1;
    let user = this.registeredUsers[username]

    for (let i = 0; i<this.registeredUsers.length; i++){
      if(this.registeredUsers[i].username === username){
        //saving the object, with all of its properties 

        userObject = this.registeredUsers[i]

        // this.registeredUsers[i].username = userUsername 
        // this.registeredUsers[i].password = userPassword 
        // return "found the user"

        counter = i;

        break
      }
    }

    if (userObject.password === password){
      //this.registeredUsers[counter].loggedIn = true 
      //user.loggedIn = true
      userObject.loggedIn = true 
      console.log("User has logged in successfully")
      return "User has logged in successfully"
    } else {
      // throw ("Username or password is incorrect")
        return ("Username or password is incorrect")
    }

// FAILED ATTEMPTS - LOGIN METHOD 

    // if (this.registeredUsers.includes(username)){
    //   for (let i=0; i<this.registeredUsers.length; i++){
    //     this.registeredUsers[i].username = userUsername 
    //     this.registeredUsers[i].password = userPassword 
    //     if (userPassword === password){
    //       // this.registeredUsers["loggedIn"[i]] = true 
    //       userObject.loggedIn = true 
    //       console.log("User has logged in successfully")
    //     }
    //   }
    // }
    
    // this.registeredUsers.password[i] = userPassword 
    // this.registeredUsers.username[i] = userUsername 

    // if (this.registeredUsers.includes(username)){
    //   if(password === this.registeredUsers.password){
    //     this.registeredUsers.loggedIn = true 
    //     console.log("User has logged in successfully")
    //   } else {
    //     throw("Username or password is incorrect")
    //   }
    // }

  }

  addScooter(location, scooter){
  
    if (this.stations[location]) {
        this.stations[location].push(scooter)
        console.log("Scooter successfully added")
        return "Scooter successfully added"
    } else {
      console.log("Station does not exist")
      return "Station does not exist"
    }
  }

  removeScooter(scooterToRemove){
    for (let key in this.stations){
      let index = this.stations[key].indexOf(scooterToRemove)
      if (index > -1){
        this.stations[key].splice(index, 1)
        return "removed successfully"
      } 
    }

    
    
  }
}

module.exports = ScooterApp

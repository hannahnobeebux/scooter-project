class Scooter{
  // scooter code here
  constructor(station, user) {
    this.station = station
    this.user = user 
    this.serial = Math.floor(Math.random() * (1000) + 1)
    this.charge = Math.floor(Math.random() * (100) + 1)
    this.isBroken = false 
    this.docked = true
  }

    rent () {
      if (this.isBroken === false && this.charge > 20){
        this.docked = false 
        console.log("Enjoy the ride.")
        return "Enjoy the ride!"
      } else if (this.charge <= 20){
        throw("Scooter is low on battery, please charge.")
      } else {
        throw("Scooter is broken, please send a repair request.")
      }
    }

    dock(newStation) {
      if (newStation !== null){
        this.station = newStation 
      } else {
        throw("Docking station required!")
        // return "Docking station required!"
      }
      this.docked = true
      this.user = ""
    }

    async recharge() {
      console.log("Starting charge")

      await new Promise(resolve => setTimeout(resolve, 2000)); //wait 2 seconds
      this.charge = 100 

      console.log("Charge complete")
    }

    async requestRepair() {
      if (this.isBroken) {
        console.log("Requesting repair")

        await new Promise(resolve => setTimeout(resolve, 3000)); //wait 3 seconds 
        console.log("Repair has been complete")
        this.isBroken = false 
      }
    }

}


module.exports = Scooter

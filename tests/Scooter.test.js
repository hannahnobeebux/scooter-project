const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(true);
//   })
// })

//Property tests 
describe("scooter properties", () => {
  beforeEach(() => {
    scooter = new Scooter("Brooklyn", "Hannah");
  });

  test("checks it is an object", () => {
    // Can't do this as the serial number and charge are random numbers
    //expect(scooter).toEqual({station: "Brooklyn", user: "Hannah"})

    // Instead, will use object notation to retrieve values from key-value pairs 
    expect(scooter.station).toBe("Brooklyn")
    expect(scooter.user).toBe("Hannah")
  })
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  beforeEach(() => {
    scooter = new Scooter("Brooklyn", "Hannah");
  });

  //rent method - FIX THIS TO BE INCLUSIVE OF ALL RANDOM NUMBERS !
  test('renting a scooter', () => {
    //scooter.charge = 19
    scooter.rent()
    expect (scooter.rent()).toBe("Enjoy the ride!")
    // expect (scooter.rent()).throw new Error ("Scooter is low on battery, please charge.")
  })

  //dock method
  test('docking the scooter', () => {
    scooter.dock("Manhattan")
    expect (scooter.station).toBe("Manhattan") 
    expect (scooter.docked).toBe(true)
    
    //Testing for an error by not passing in a docking location
    //expect(scooter).toThrow("Docking station required!")
  
  })

  //requestRepair method
  test ("requesting repair", async () => {
    await scooter.requestRepair(); //we need to wait for the charge
    expect (scooter.isBroken).toBe(false);
  })

  //charge method
  test ("charge", async () => {
    await scooter.recharge(); //we need to wait for the charge
    expect (scooter.charge).toBe(100);
  })

})

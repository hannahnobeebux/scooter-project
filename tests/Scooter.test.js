const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(true);
//   })
// })

//Method tests
describe('scooter methods', () => {
  // tests here!
  beforeEach(() => {
    scooter = new Scooter("Brooklyn", "Hannah");
  });

  //rent method
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

let randysCar = {
  make: "Honda",
  model: "Element",
  year: 2015,
  colors: "yellow",
  isLocked: false,
  isRunning: false,
  odometer: 0,
  honk: function () {
    console.log(this)
    console.log("Hoooonk!")
  },

  toggleLocks: function () {
    console.log('toggle locks')
    if (this.isLocked) {
      this.isLocked = false
    } else {
      this.isLocked = true
    }
  },

  start: function () {
    this.isRunning = true
  },

  go: function () {
    this.odometer = this.isRunning ? 10: 0
    if (this.isRunning == true) {
      this.odometer += 10;
    } else {
      throw new Error("The car cant go if its not started")
    }
  }
}

let lockRandysCar = randysCar.toggleLocks

randysCar.toggleLocks(); // ponits to randys car 
// lockRandysCar(); // points to window
// a new refrence to the 
let lockCar = randysCar.toggleLocks()

randysCar.toggleLocks()
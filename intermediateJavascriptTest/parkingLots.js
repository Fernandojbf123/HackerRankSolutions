class parkingLots {
    //add methods here
    slots = []
    constructor(slots){
         this.slots = new Array(slots).fill(null)
    }

}

console.log(parkingLots.slots(15))
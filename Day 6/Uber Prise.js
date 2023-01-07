class Ride {
  constructor(Name, distance, time) {
    this.Name = Name;
    this.distance = distance;
    this.time = time;
  }
  pay() {
    let price = this.distance*10 + this.time*1.5;
    console.log("the Passenger",this.Name, "has to pay",price);
  }
}

class Record {
  constructor() {
    this.record = [];
  }
  newRide(Name, distance, time) {
    let p = new Ride(Name, distance, time);
    this.record.push(p);
    return p;
  }
  get allRide() {
    return this.record;
  }
  get numberOfRide() {
    return this.record.length;
  }
}
let todayRecord = new Record();
todayRecord.newRide("Krishna",12, 60);
todayRecord.newRide("Pavani",2, 20);
todayRecord.newRide("Ansuman", 8, 30);
todayRecord.newRide("Subhasmita", 1.5, 18);
todayRecord.allRide.forEach((ride) => ride.pay());

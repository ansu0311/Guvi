class Person {
    constructor(Name, gender, age) {
      this.Name = Name;
      this.gender = gender;
      this.age = age;
    }
    vote() {
      if (this.age > 18)
        console.log(this.Name, "is eligible to vote.");
    }
  }
  
  class People {
    constructor() {
      this.people = [];
    }
    newPerson(Name, gender, age) {
      let p = new Person(Name, gender, age);
      this.people.push(p);
      return p;
    }
    get allPeople() {
      return this.people;
    }
    get numberOfPeople() {
      return this.people.length;
    }
  }
  let league = new People();
  league.newPerson("Krishna", "Male", 16);
  league.newPerson("Pavani", "Female",20);
  league.newPerson("Ansuman", "Male", 21)
  league.newPerson("Subhasmita", "Female",18);
  league.allPeople.forEach((movie) => movie.vote());
  
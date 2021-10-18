class Person {
  constructor(fistName, lastName, age, gender, [...interests]) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = [...interests];
  }

  bio() {
    return `${this.fistName} ${this.lastName} is ${
      this.age
    } years old. They like ${this.interests.join(", ")}`;
  }

  gretting() {
    return `Hi! I'm ${this.fistName}`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, [...interests], subject) {
    super(firstName, lastName, age, gender, [...interests]), subject;
    this.subject = subject;
  }

  gretting() {
    return `Hello my name is ${this.fistName} ${this.lastName}, and I teach ${this.subject}`;
  }
}

class Student extends Person {
  constructor(fistName, lastName, age, gender, [...interests]) {
    super(fistName, lastName, age, gender, [...interests]);
  }

  gretting() {
    `Yo! I'm ${this.firstName}`;
  }
}

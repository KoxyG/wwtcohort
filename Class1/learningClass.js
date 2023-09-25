//a class is an object, but an object requires you to work direct on it but a class requires you to initiate it first.
//Class 3

class Human {
  //initializing the class
  constructor(complexion, height, gender, name, status) {
    this.complexion = complexion;
    this.height = height;
    this.nationality = null;
    this.gender = gender;
    this.name = name;
    this.status = status;
  }

  username() {
    let usernameSuggestion = [];
    for (let index = 0; index < 6; index++) {
      if (index % 2 == 0) {
        usernameSuggestion.push(this.name + this.height + index);
      } else {
        usernameSuggestion.push(index + this.height + this.name);
      }
    }
    return usernameSuggestion;
  }
}

let human = new Human("Brown", "65", "female", "koxy", "single");
console.log(human);

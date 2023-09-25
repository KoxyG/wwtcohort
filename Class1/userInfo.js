//class 2

let  userInfo = {
     firstName: "John",
     lastName: "Doe",
     email: "devkoxy@gmail.com",
     fullName: function() {
          return this.firstName + " " + this.lastName;
     },
     yearOfBirth: 1990,
     isMarried: false,
     begForMarraiage: function() {
          if (this.age() >= 25) {
               return "Please, get married"
          } else {
               return "Your time is coming"
          }
     },
     age: function() {
          return new Date().getFullYear() - this.yearOfBirth
     }
}
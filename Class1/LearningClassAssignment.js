class UserInfo{

     constructor(yearOfBirth) {
          this.yearOfBirth = yearOfBirth;
     }

     Kfactor() {
         return Math.random() * 10
     }

     age() {
          return new Date().getFullYear() - this.yearOfBirth
     }

     static get getMarried() {
          //the age() method cant be called directly because,
          //static methods in JavaScript do not have access to instance-specific methods or properties.
          //Static methods are called on the class itself, so they do not have access to the "this".


          //create a new instance of the userInfo class.
          //a new instance is created here so i can be able to call the
          //age() and Kfactor() methods on the new instance
          const user = new UserInfo(2000);

          //call the age() and Kfactor methods on the new instance
          const userAge = user.age();
          const userKfactor = user.Kfactor();

          if (userAge > (userAge * userKfactor)) {
               return "User is not eligible for marriage";
          } else if (userAge < 2 *  (userAge * userKfactor) ) {
               return "You are eligible for marriage";
          } else {
               return "No decision can be made based on the criteria."
          }
     }
}

console.log(UserInfo.getMarried)
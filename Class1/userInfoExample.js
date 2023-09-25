let userExample = {
     yearOfBirth: 2000,

     //returns a random number between 0-9, number can be decimal
     Kfactor: function() {
         return Math.random() * 10
     },

     //calculate age from the year of birth
     age: function () {
          return new Date().getFullYear() - this.yearOfBirth
     },
     
     //tells the user  that they have to get married based on the criteria
     //if user's age is greater than the product of the age and that random k-factor(not eligible)
     //if user's age is less than by a 2x or more factor then the user is eligible for marriagre
     getMarried: function() {
          if (this.age() > (this.age() * this.Kfactor())) {
               return "User is not eligible for marriage";
          } else if (this.age() < 2 *  (this.age() * this.Kfactor()) ) {
               return "You are eligible for marriage";
          } else {
               return "No decision can be made based on the criteria."
          }
     },
}
console.log(userExample.getMarried())

//convert the userInfo into a class and write a function that convert a userInfo object into a class, 
//i.e using the class as a wrapper for the object
//make the K-factor a static property
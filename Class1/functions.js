//class 1
function greet() {
     console.log("Hello, Wworld!");
}
greet();

//2
function sayHello(name) {
    console.log('Hi, there');
}

sayHello('John');
sayHello('Bob');

//3
function add(a, b) {
     return a + b;
}
let result = add(1, 2);
console.log(result);

//4 Method
const person = {
     firstName: "John",
     lastName: "Doe",
     fullName: function () {
          return this.firstName + " " + this.lastName;
     }
}
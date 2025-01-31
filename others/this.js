const object = {
  name: "Rahul",
  age: 20,
  city: "Delhi",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log("this", this);
console.log("object.sayHello()", object.sayHello());

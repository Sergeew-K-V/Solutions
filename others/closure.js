const person = {
  age: 128,
  name: "petya",
  greet: function () {
    console.log("🚀 ~ this:", this);
    console.log(`${this.name}:greet`);
  },
  greetArrow: () => {
    console.log("🚀 ~ this:", this);
    console.log(`${this.name}:greetArrow`);
  },
};

person.greet();
person.greetArrow();

// -----------------------

// function greet() {
//   console.log("🚀 ~ this:", this);
//   console.log(`${this.name}:greet`);
// }

// const greetArrow = () => {
//   console.log("🚀 ~ this:", this);
//   console.log(`${this.name}:greetArrow`);
// };

// const person = {
//   age: 128,
//   name: "petya",
//   greet,
//   greetArrow,
// };

// person.greet();
// person.greetArrow();

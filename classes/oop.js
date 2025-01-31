class Person {
  #name = "";
  #second = "";
  constructor(name, second) {
    this.#name = name;
    this.#second = second;
  }
}

const API_CLASS = require("./testClass");

//   get name() {
//     return this.#name;
//   }

//   get second() {
//     return this.#second;
//   }

//   say(words) {
//     console.log(this.#name + "telling:", words);
//   }
// }

// const person = new Person("Alexei", "Second");
// console.log("🚀 ~ person:", person);
// console.log("🚀 ~ person:", person.name);

// class WorkerPerson extends Person {
//   #work = "";
//   constructor(work, name, second) {
//     super(name, second);
//     this.#work = work;
//   }

//   get work() {
//     return this.#work;
//   }
//   say() {
//     console.log("Just saying");
//   }
// }

// const worker = new WorkerPerson("IT", "Igor", "Lubov");
// console.log("🚀 ~ worker:", worker.work);
// console.log("🚀 ~ worker:", worker.name);
// console.log("🚀 ~ worker:", worker.second);

// person.say("You look nice");
// worker.say();

// let user = {
//   name: "dada",
//   second: "nene",
//   say: function () {
//     console.log(this);
//   },
// };

// user.say();

// function SayMyName() {
//   console.log(this);
// }
// const MyFunc = () => {
//   console.log(this);
// };
// SayMyName();
// MyFunc();

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function (student) {
//       //   console.log(this);
//     //   console.log(this.title + ": " + student);
//     });
//   },
// };
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     console.log(this, "main this");
//     // this.students.forEach((student) => console.log(this));
//   },
// };

// group.showList();

const api = new API_CLASS("https://jsonplaceholder.typicode.com/");

api.todos().then((res) => {
  console.log(res);
});

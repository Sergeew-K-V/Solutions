console.log("1");

new Promise((resolve, reject) => {
  console.log("2");
  setTimeout(() => {
    resolve("Resolved1");
  }, 0);
}).then((res) => {
  console.log("4");
});

const p = new Promise((resolve, reject) => {
  console.log("5");
  setTimeout(() => {
    resolve(
      new Promise((res) => {
        console.log("6");
      })
    );
  }, 1000);
});

p.then((res) => {
  console.log("7");
}).then((d) => console.log("8"));

// Promise.resolve().then((value) => {
//   console.log("3");
// });

// 1
// 2
// 5
// 3
// 4
// 6

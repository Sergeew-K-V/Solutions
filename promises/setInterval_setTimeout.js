function getData() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3001/api/movies")
      .then((data) => {
        console.log("Got data from fetch");
        data.json().then((result) => {
          console.log("Our data from json()");

          resolve(result);
        });
      })
      .catch((err) => reject(err));
  });
}

let count = 0;

// // setTimeout realization
// const array = [1, 2, 3, 4];
// function getDataUntilSuccess() {
//   console.log("Start setTimeout");
//   new Promise((resolve, reject) => {
//     if (count < 3) {
//       console.log("We got error");
//       reject();

//       return;
//     }
//     getData().then((result) => {
//       resolve(result);
//     });
//     console.log("Register promise");
//   })
//     .then((promiseThenData) => {
//       console.log("~~~~ ~ newPromise ~ promiseThenData~~~~:", promiseThenData);
//     })
//     .catch((err) => {
//       console.log("err", err),
//         setTimeout(() => {
//           getDataUntilSuccess();
//         }, 3000);
//     })
//     .finally(() => {
//       count += 1;
//     });
// }

// setTimeout(getDataUntilSuccess, 3000);

// setInterval realization
// const array = new Array(10);
// let intervalId;

// function getDataUntilSuccess() {
//   new Promise((resolve, reject) => {
//     if (count < 5) {
//       console.log("We got error");
//       reject();

//       return;
//     }
//     getData().then((result) => {
//       resolve(result);
//     });
//     console.log("Register promise");
//   })
//     .then((promiseThenData) => {
//       clearInterval(intervalId);
//       console.log("~~~~ ~ newPromise ~ promiseThenData~~~~:", promiseThenData);
//     })
//     .catch((err) => {
//       console.log("err", err);
//     })
//     .finally(() => {
//       count += 1;
//     });
// }

// intervalId = setInterval(getDataUntilSuccess, 3000);
// console.log("~~~~ ~ intervalId ~ intervalId~~~~:", intervalId);

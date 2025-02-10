// setTimeout(() => {
//   console.log("~~~~1 ~ setTimeout ~ setTimeout~~~~:");
// }, 0);

// fetch("http://localhost:3003/api/bots")
//   .then((response) => {
//     console.log("~~~~ ~ .then ~ response~~~~:");

//     return response.json();
//   })
//   .then(() => {
//     console.log("~~~~3 ~ console.log~~~~:");
//   });

// setTimeout(() => {
//   console.log("~~~~2 ~ setTimeout ~ setTimeout~~~~:");
// }, 0);
//

setTimeout(() => {
  console.log("~~~~1 ~ setTimeout ~ setTimeout~~~~:");
}, 0);

new Promise((resolve) => {
  resolve(fetch("http://localhost:3003/api/bots"));
})
  .then((res) => res.json())
  .then((response) => {
    console.log("~~~~ ~ .then ~ response~~~~:", response);
    return response;
  })
  .then(() => {
    console.log("~~~~3 ~ console.log~~~~:");
  });

setTimeout(() => {
  console.log("~~~~2 ~ setTimeout ~ setTimeout~~~~:");
}, 0);

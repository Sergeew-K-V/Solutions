new Promise((res, rej) => {
  res(2);
})
  .then((res) => res)
  .then(console.log)
  .catch(() => {
    throw "2";
  })
  .then(console.log)
  .then((res) => res)
  .then(console.log);

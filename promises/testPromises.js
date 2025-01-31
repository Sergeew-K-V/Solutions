// // async/await
// (async () => {
//   const fn = (val, delay = 1000) => {
//     return new Promise((resolve) => {
//       console.log("resolving");
//       if (!val) {
//         val = Math.random().toFixed(2) * 100;
//       }

//       setTimeout(() => {
//         console.log("resolved val", val);
//         resolve(val);
//       }, delay);
//     });
//   };

//   // const func1 = await fn(1, 3000);
//   // const func2 = await fn(2, 1000);
//   // const func3 = await fn(3, 2000);
//   // const func4 = await fn(4, 3000);

//   const promises = [
//     () => fn(1, 3000),
//     () => fn(2, 1000),
//     () => fn(3, 2000),
//     () => fn(4, 3000),
//   ];

//   for (let index = 0; index < promises.length; index++) {
//     const res = await promises[index]();
//   }
// })();

const fn = (val, delay = 1000) => {
  return new Promise((resolve) => {
    console.log("resolving");
    if (!val) {
      val = Math.random().toFixed(2) * 100;
    }

    setTimeout(() => {
      console.log("resolved val", val);
      resolve(val);
    }, delay);
  });
};

const promises = [
  () => fn(1, 3000),
  () => fn(2, 1000),
  () => fn(3, 2000),
  () => fn(4, 3000),
];

const resolveChainPromises = (promises) => {
  let result = Promise.resolve([]);

  promises.forEach((promise) => {
    result = result.then((results) => {
      return promise().then((res) => {
        results.push(res);
        return results;
      });
    });
  });

  return result;
};

resolveChainPromises(promises).then(console.log);

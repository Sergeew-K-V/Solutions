const fn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("done");
      resolve(Math.random().toFixed(2) * 100);
    }, 1000);
  });
};

const chainPromises = (promises) => {
  let result = Promise.resolve([]);

  promises.forEach((promise) => {
    result = result.then((results) => {
      console.log("🚀 ~ chainPromises ~ result:", results);
      return promise().then((res) => {
        console.log("🚀 ~ returnpromise ~ res:", res);
        results.push(res);
        return results;
      });
    });
  });

  return result;
};

const values = [fn, fn, fn];

chainPromises(values).then((result) => {
  console.log(result); // [5, 5, 5]
});

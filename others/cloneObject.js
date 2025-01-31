// const object = {
//   name: "kim",
//   age: 18,
//   sex: "female",
//   single: false,
//   children: [
//     {
//       name: "nested",
//       age: 7,
//       sex: "male",
//     },
//     { name: "nested2", age: 4, sex: "female" },
//   ],
// };

// // const copy = object;
// // const copy = Object.assign({}, object);
// // const copy = { ...object };
// // const copy = structuredClone(object);
// // const copy = JSON.parse(JSON.stringify(object));

// console.log("🚀 ~ copy:", copy);
// console.log("🚀 ~ copy===object:", copy === object);

// console.log(
//   "🚀 ~ copy.children[0]===object.children[0]:",
//   copy.children[0] === object.children[0]
// );

// let john = { name: "John" };

// let array = [john];

// john.name = ""; // перезаписываем ссылку на объект
// console.log("🚀 ~ john:", john);

// console.log(array[0]);

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null; // перезаписываем ссылку на объект
// console.log("🚀 ~ john:", john);
// console.log("🚀 ~ map.get(john):", map.keys());
// console.log("🚀 ~ map.get(john):", map.values());

let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // перезаписываем ссылку на объект
console.log("🚀 ~ john:", john);

console.log("🚀 ~ weakMap:", weakMap.has(john));
// объект john удалён из памяти

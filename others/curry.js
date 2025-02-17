// // "use strict";
// function curry(func) {
//   return function curried(...args) {
//     // console.log("~~~~ ~ curried ~ args.length~~~~:", args.length);
//     // console.log("~~~~ ~ curried ~ func.length~~~~:", func.length);
//     if (args.length >= func.length) {
//       // console.log("~~~~ ~ curried ~ this~~~~:", this);
//       // console.log("~~~~ ~ curried ~ args~~~~:", args);
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         // console.log("~~~~ ~ args2~~~~:", args2);
//         // console.log("~~~~ ~ args~~~~:", args);
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// // console.log(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
// // console.log(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
// console.log(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов

// //second realization

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(func) {
//   return function curried(...args) {
//     if (args.length < func.length) {
//       return function (...leftArgs) {
//         return curried(...args.concat(leftArgs));
//       };
//     }

//     return func(...args);
//   };
// }

// // curry(sum)(1, 2, 3);
// console.log("~~~~ ~ curry(sum)(1, 2, 3)~~~~:", curry(sum)(1, 2, 3));
// // curry(sum)(1, 2)(3);
// console.log("~~~~ ~ curry(sum)(1, 2)(3)~~~~:", curry(sum)(1, 2)(3));
// // curry(sum)(1)(2)(3);
// console.log("~~~~ ~ curry(sum)(1)(2)(3)~~~~:", curry(sum)(1)(2)(3));

// class Calculator {
//   constructor(value) {
//     this.value = value;
//   }

//   add(a, b, c) {
//     console.log("~~~~ ~ Calculator ~ this.value~~~~:", this.value);
//     return this.value + a + b + c;
//   }
// }

// const calc = new Calculator(10);

// console.log(curry(calc.add.bind(calc))(1)(2)(3));

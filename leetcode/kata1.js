// 1. Two Sum
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   const indexes = [];
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     if (indexes.length) {
//       break;
//     }
//     for (let index2 = index + 1; index2 < nums.length; index2++) {
//       const element2 = nums[index2];
//       if (target === element + element2) {
//         indexes.push(index);
//         indexes.push(index2);
//       }
//     }
//   }

//   return indexes;
// };

// // twoSum([2,7,11,15],9)
// console.log("~~~~ ~ twoSum([2,7,11,15],9)~~~~:", twoSum([2, 7, 11, 15], 9));
// // twoSum([3,2,4],6)
// console.log("~~~~ ~ twoSum([3,2,4],6)~~~~:", twoSum([3, 2, 4], 6));
// // twoSum([3,3],6)
// console.log("~~~~ ~ twoSum([3,3],6)~~~~:", twoSum([3, 3], 6));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = {};

  for (let index = 0; index < nums.length; index++) {
    const computedValue = target - nums[index];

    if (computedValue in map) {
      return [map[computedValue], index];
    }

    map[nums[index]] = index;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

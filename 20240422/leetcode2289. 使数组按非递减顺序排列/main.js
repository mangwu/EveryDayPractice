// 给你一个下标从 0 开始的整数数组 nums 。在一步操作中，移除所有满足 nums[i - 1] > nums[i] 的 nums[i] ，其中 0 < i < nums.length 。

// 重复执行步骤，直到 nums 变为 非递减 数组，返回所需执行的操作数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  const stack = [];
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const curStack = [];
    while (i < n && stack.length && stack[stack.length - 1] > nums[i]) {
      curStack.push(nums[i]);
      i++;
    }
    if (i < n) stack.push(nums[i]);
  }
  return ans;
};

// 8,9,6,4,5,8,6,9,11
// 8 9 5 8 9 11

// [12,8_,9,6_,4_,5,8,6_,9,11,15]

// 8 4 5 8 9 11
// step1 12 9_ 5_ 8 9 11 15   => 8 6 4 6
// step2 12 8_ 9 11 15  => 9 5
// step3 12 9_ 11 15 => 8
// step4 12 11_ 15 => 9
// step5 12 15  => 11

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  const stack = [];
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const curStack = stack.length ? [[stack[stack.length - 1], 0]] : [];
    while (i < n && stack.length && stack[stack.length - 1] > nums[i]) {
      if (nums[i] < curStack[curStack.length - 1][0]) {
        curStack.push([nums[i], 1]);
        ans = Math.max(ans, 1);
      } else {
        let freq = 2;
        while (curStack[curStack.length - 1][0] <= nums[i]) {
          freq = Math.max(freq, curStack.pop()[1] + 1);
        }
        curStack.push([nums[i], freq]);
        ans = Math.max(ans, freq);
      }
      i++;
    }
    if (i < n) stack.push(nums[i]);
  }
  return ans;
};

// 20,15_,16,12_,18,11_,14,13_,12_,14,14,9_,8_,17
// step1 20,16_,18,14_,14,14,17 => 15 12 11 13 12 9 8
// step2 20,18_,14_,14,17 => 16 14
// step3 20,14_,17 => 18 14
// step4 20,17_ => 14
// setp5 20 => 17

// [8,5,2,4,7,9,6,1]
//

const { randomArr } = require("../../publicFunc/random/random");
const {
  recordInOutContent,
} = require("../../publicFunc/recordInOutContent/recordInOutContent");
recordInOutContent(totalSteps, randomArr(100, 1, 1000));


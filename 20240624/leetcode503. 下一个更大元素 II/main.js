/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-24 09:03:27                                                  *
 * @LastModifiedDate: 2024-06-24 09:41:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

// 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  const n = nums.length;
  const nextGreater = new Array(2 * n).fill(-1);
  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i % n];
    while (stack.length && nums[stack[stack.length - 1] % n] < num) {
      nextGreater[stack.pop()] = num;
    }
    stack.push(i);
  }
  return nextGreater.slice(0, n);
};

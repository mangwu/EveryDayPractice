/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-10 15:55:56                                                  *
 * @LastModifiedDate: 2022-03-10 16:07:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

// 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
// 如果不存在，则输出 -1 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // 单调栈，遍历两遍即可
  const len = nums.length;
  const ans = [];
  const stack = [];
  for (let i = len * 2 - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i % len]) {
      stack.pop();
    }
    // 保存结果，会保存两遍，第二遍是正确的
    ans[i % len] = stack.length ? nums[stack[stack.length - 1]] : -1;
    // 入栈
    stack.push(i % len);
  }
  return ans;
};

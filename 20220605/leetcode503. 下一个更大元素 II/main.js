/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-05 16:18:00                                                  *
 * @LastModifiedDate: 2022-06-05 16:24:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），
// 返回 nums 中每个元素的 下一个更大元素 。

// 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这
// 意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  nums = nums.concat(nums);
  const n = nums.length;
  const stack = [];
  const ans = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    // 找到第一个比nums[i]大的数
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(nums[i]);
  }
  return ans.slice(0, n / 2);
};

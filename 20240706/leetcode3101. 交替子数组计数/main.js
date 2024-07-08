/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-06 22:52:15                                                  *
 * @LastModifiedDate: 2024-07-06 23:05:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个
// 二进制数组
// nums 。

// 如果一个
// 子数组
// 中 不存在 两个 相邻 元素的值 相同 的情况，我们称这样的子数组为 交替子数组 。

// 返回数组 nums 中交替子数组的数量。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function (nums) {
  let ans = 0;
  let start = 0;
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (nums[i] === nums[i - 1] || i === n) {
      let len = i - start;
      ans += ((1 + len) * len) / 2;
      start = i;
    }
  }
  return ans;
};

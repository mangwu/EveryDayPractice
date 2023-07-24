/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-22 22:30:22                                                  *
 * @LastModifiedDate: 2023-07-22 22:33:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，如果它是数组 base[n] 的一个排列，我们称它是个 好 数组。

// base[n] = [1, 2, ..., n - 1, n, n] （换句话说，它是一个长度为 n + 1 且包含 1 到 n - 1 恰好各一次，包含 n  两次的一个数组）。比方说，base[1] = [1, 1] ，base[3] = [1, 2, 3, 3] 。

// 如果数组是一个好数组，请你返回 true ，否则返回 false 。

// 注意：数组的排列是这些数字按任意顺序排布后重新得到的数组。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== i + 1) return false;
  }
  return nums[n - 1] === n - 1;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-30 09:31:06                                                  *
 * @LastModifiedDate: 2024-01-30 11:14:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的数组 nums 。

// 每一秒，你可以对数组执行以下操作：

// 对于范围在 [0, n - 1] 内的每一个下标 i ，将 nums[i] 替换成 nums[i] ，nums[(i - 1 + n) % n] 或者 nums[(i + 1) % n] 三者之一。
// 注意，所有元素会被同时替换。

// 请你返回将数组 nums 中所有元素变成相等元素所需要的 最少 秒数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function (nums) {
  // 数字的扩散，一个数字可以扩散到相邻的位置
  const n = nums.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(nums[i]) ? hash.get(nums[i]).push(i) : hash.set(nums[i], [i]);
  }
  let ans = Infinity;
  for (const [key, values] of hash) {
    // 全部变成key需要花费的时间
    const m = values.length;
    let cur = 0;
    if (m === 1) {
      ans = Math.min(ans, Math.floor(n / 2));
    } else {
      for (let i = 0; i < m; i++) {
        cur = Math.max(
          cur,
          Math.floor(((values[i] - values[(i + m - 1) % m] + n) % n) / 2)
        );
      }
      ans = Math.min(ans, cur);
    }
  }
  return ans;
};

// 1 2 3 4 5 6 7

//  5 5 5 2 1 3 4 2 2 5

//  5 5 5 5 1 3 4 2 5 5
//  5 5 5 5 5 3 4 5 5 5
//  5 5 5 5 5 5 5 5 5 5

//  5 5 2 2 2 3 2 2 2 2
//  2 2 2 2 2 2 2 2 2 2

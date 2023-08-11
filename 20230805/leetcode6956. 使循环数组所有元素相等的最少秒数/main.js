/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-05 22:38:50                                                  *
 * @LastModifiedDate: 2023-08-05 22:51:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    hash.has(nums[i]) ? hash.get(nums[i]).push(i) : hash.set(nums[i], [i]);
  }
  let res = Infinity;
  for (const [key, value] of hash) {
    const m = value.length;
    let cur = Math.ceil((value[0] + n - value[m - 1] - 1) / 2);
    for (let i = 1; i < m; i++) {
      cur = Math.max(cur, Math.ceil((value[i] - value[i - 1] - 1) / 2));
    }
    res = Math.min(res, cur);
  }
  return res;
};

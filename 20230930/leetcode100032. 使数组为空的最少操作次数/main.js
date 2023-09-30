/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-30 22:35:46                                                  *
 * @LastModifiedDate: 2023-09-30 22:50:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个下标从 0 开始的正整数数组 nums 。

// 你可以对数组执行以下两种操作 任意次 ：

// 从数组中选择 两个 值 相等 的元素，并将它们从数组中 删除 。
// 从数组中选择 三个 值 相等 的元素，并将它们从数组中 删除 。
// 请你返回使数组为空的 最少 操作次数，如果无法达成，请返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const hash = new Map();
  for (const num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [key, value] of hash) {
    if (value === 1) return -1;
    const kk = value % 3;
    if (kk === 0) {
      ans += value / 3;
    } else if (kk === 1) {
      ans += Math.floor(value / 3) + 1;
    } else if (kk === 2) {
      ans += Math.floor(value / 3) + 1;
    }
  }
  return ans;
};

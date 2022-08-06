/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-06 22:35:24                                                  *
 * @LastModifiedDate: 2022-08-06 23:44:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。
// 如果 i < j 且 j - i != nums[j] - nums[i] ，那么我们称 (i, j) 是一个 坏数对 。

// 请你返回 nums 中 坏数对 的总数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  // 统计相差之数相等的数量
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i] - i)) {
      let num = hash.get(nums[i] - i);
      hash.set(nums[i] - i, num + 1);
    } else {
      hash.set(nums[i] - i, 1);
    }
  }
  // 计算好数对
  let goodPairs = 0;
  for (const [key, val] of hash) {
    if (val >= 2) {
      goodPairs += (val * (val - 1)) / 2;
    }
  }
  let badPairs = (n * (n - 1)) / 2 - goodPairs;
  return badPairs;
};

// 坏树对 = 总数对 - 好数对
//

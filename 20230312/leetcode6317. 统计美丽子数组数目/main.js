/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-12 10:38:46                                                  *
 * @LastModifiedDate: 2023-03-12 11:04:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组nums 。每次操作中，你可以：

// 选择两个满足 0 <= i, j < nums.length 的不同下标 i 和 j 。
// 选择一个非负整数 k ，满足 nums[i] 和 nums[j] 在二进制下的第 k 位（下标编号从 0 开始）是 1 。
// 将 nums[i] 和 nums[j] 都减去 2k 。
// 如果一个子数组内执行上述操作若干次后，该子数组可以变成一个全为 0 的数组，那么我们称它是一个 美丽 的子数组。

// 请你返回数组 nums 中 美丽子数组 的数目。

// 子数组是一个数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  const binary = new Array(20).fill(0);
  // [0,0,2,2,3,3,2,0,0]
  //  0 0 0 0 1 1 0 0 0 => 保存状态
  let res = 0;
  const hash = new Map([[0, 1]]);
  for (let num of nums) {
    let idx = 0;
    while (num) {
      if (num & 1) binary[idx]++;
      num = num >> 1;
      idx++;
    }
    let cur = 0;
    for (let i = 0; i < 20; i++) {
      if (binary[i] % 2 === 1) cur += 2 ** i;
    }
    if (hash.has(cur)) {
      res += hash.get(cur);
      hash.set(cur, hash.get(cur) + 1);
    } else {
      hash.set(cur, 1);
    }
  }
  return res;
};

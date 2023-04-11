/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-09 10:39:58                                                  *
 * @LastModifiedDate: 2023-04-09 10:56:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。现有一个长度等于 nums.length 的数组 arr 。对于满足 nums[j] == nums[i] 且 j != i 的所有 j ，arr[i] 等于所有 |i - j| 之和。如果不存在这样的 j ，则令 arr[i] 等于 0 。

// 返回数组 arr 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(nums[i]) ? hash.get(nums[i]).push(i) : hash.set(nums[i], [i]);
  }
  console.log(hash);
  const ans = new Array(n).fill(0);
  for (const [key, value] of hash) {
    const prefix = [0];
    let sum = 0;
    for (const item of value) {
      sum += item;
      prefix.push(sum);
    }
    const m = value.length;
    for (let i = 0; i < m; i++) {
      ans[value[i]] = sum + i * value[i] - 2 * prefix[i] - (m - i) * value[i];
    }
  }
  return ans;
};

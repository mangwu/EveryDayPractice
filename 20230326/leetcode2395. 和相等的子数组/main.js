/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-26 11:57:37                                                  *
 * @LastModifiedDate: 2023-03-26 11:59:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，判断是否存在 两个 长度为 2 的子数组且它们的 和 相等。注意，这两个子数组起始位置的下标必须 不相同 。

// 如果这样的子数组存在，请返回 true，否则返回 false 。

// 子数组 是一个数组中一段连续非空的元素组成的序列。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const set = new Set();
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let sum = nums[i] + nums[i + 1];
    if (set.has(sum)) return true;
    set.add(sum);
  }
  return false;
};

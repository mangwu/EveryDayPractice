/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 15:46:38                                                  *
 * @LastModifiedDate: 2025-02-24 16:16:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 测试用例的答案是一个 32-位 整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = Math.max.apply(null, nums);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      let j = i + 1;
      let cur = nums[i];
      let firstNeg = cur < 0 ? i : -1;
      let preProd = nums[i];
      while (j < n && nums[j] !== 0) {
        if (firstNeg === -1) preProd *= nums[j];
        if (nums[j] < 0 && firstNeg === -1) firstNeg = j;
        cur = cur * nums[j++];
        res = Math.max(res, cur);
      }
      if (cur < 0 && firstNeg !== -1 && j > i + 1)
        res = Math.max(res, cur / preProd);
      i = j;
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = nums[0];
  const n = nums.length;
  // 动态规划
  let maxNum = nums[0];
  let minNum = nums[0];
  for (let i = 1; i < n; i++) {
    mx = maxNum;
    mi = minNum;
    maxNum = Math.max(nums[i], nums[i] * mx, nums[i] * mi);
    minNum = Math.min(nums[i], nums[i] * mi, nums[i] * mx);
    res = Math.max(res, maxNum);
  }
  return res;
};

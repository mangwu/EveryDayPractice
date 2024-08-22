/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-29 23:33:16                                                  *
 * @LastModifiedDate: 2024-03-29 23:38:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。

// 如果下标三元组 (i, j, k) 满足下述全部条件，则认为它是一个 山形三元组 ：

// i < j < k
// nums[i] < nums[j] 且 nums[k] < nums[j]
// 请你找出 nums 中 元素和最小 的山形三元组，并返回其 元素和 。如果不存在满足条件的三元组，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let ans = Infinity;
  const n = nums.length;
  let leftMin = nums[0];
  const rightMins = new Array(n).fill(Infinity);
  rightMins[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMins[i] = Math.min(rightMins[i + 1], nums[i]);
  }
  for (let i = 1; i < n - 1; i++) {
    if (leftMin < nums[i] && nums[i] > rightMins[i + 1])
      ans = Math.min(ans, leftMin + nums[i] + rightMins[i + 1]);
    leftMin = Math.min(leftMin, nums[i]);
  }
  return ans === Infinity ? -1 : ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-09 21:12:28                                                  *
 * @LastModifiedDate: 2023-07-09 21:38:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < n - 2; i++) {
    if (nums[i - 1] === nums[i]) continue;
    let target = -nums[i];
    let k = n - 1;
    for (let j = i + 1; j < k; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      while (j < k && nums[k] + nums[j] > target) {
        k--;
      }
      if (j !== k && nums[k] + nums[j] === target) {
        res.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  return res;
};

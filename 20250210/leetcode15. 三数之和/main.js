/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-10 10:01:21                                                  *
 * @LastModifiedDate: 2025-02-10 10:14:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b); // 先排序
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let right = n - 1;
    for (let j = i + 1; j < right; j++) {
      if (j - 1 > i && nums[j] === nums[j - 1]) continue;
      let sum = nums[i] + nums[j];
      while (right > j && sum + nums[right] > 0) right--;
      if (right > j && sum + nums[right] === 0)
        ans.push([nums[i], nums[j], nums[right]]);
    }
  }
  return ans;
};

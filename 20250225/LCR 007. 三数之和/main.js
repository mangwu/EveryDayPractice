/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 16:37:49                                                  *
 * @LastModifiedDate: 2025-02-25 16:41:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res = [];
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let right = n - 1;
    for (let j = i + 1; j < n - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let sum = nums[i] + nums[j];
      while (right > j && sum + nums[right] > 0) right--;
      if (right > j && sum + nums[right] === 0)
        res.push([nums[i], nums[j], nums[right]]);
    }
  }
  return res;
};

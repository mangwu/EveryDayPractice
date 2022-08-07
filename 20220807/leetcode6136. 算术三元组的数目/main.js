/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 11:08:21                                                  *
 * @LastModifiedDate: 2022-08-07 11:10:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：

// i < j < k ，
// nums[j] - nums[i] == diff 且
// nums[k] - nums[j] == diff
// 返回不同 算术三元组 的数目。

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set(nums);
  let ans = 0;
  for (const num of nums) {
    if (set.has(num + diff) && set.has(num + diff + diff)) {
      ans++;
    }
  }
  return ans;
};

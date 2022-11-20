/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-20 10:31:20                                                  *
 * @LastModifiedDate: 2022-11-20 10:33:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的正整数数组 nums 。请你找出并统计满足下述条件的三元组 (i, j, k) 的数目：

// 0 <= i < j < k < nums.length
// nums[i]、nums[j] 和 nums[k] 两两不同 。
// 换句话说：nums[i] != nums[j]、nums[i] != nums[k] 且 nums[j] != nums[k] 。
// 返回满足上述条件三元组的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          ans++;
        }
      }
    }
  }
  return ans;
};

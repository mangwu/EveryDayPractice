/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-30 20:04:57                                                  *
 * @LastModifiedDate: 2022-04-30 20:25:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，和一个整数 k 。

// 在一个操作中，您可以选择 0 <= i < nums.length 的任何索引 i 。
// 将 nums[i] 改为 nums[i] + x ，其中 x 是一个范围为 [-k, k] 的整数。
// 对于每个索引 i ，最多 只能 应用 一次 此操作。

// nums 的 分数 是 nums 中最大和最小元素的差值。

// 在对  nums 中的每个索引最多应用一次上述操作后，返回 nums 的最低 分数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let min = Infinity;
  let max = -Infinity;
  for (const num of nums) {
    min = Math.min(num, min);
    max = Math.max(num, max);
  }
  min += min + k;
  max -= max - k;
  if (max - min > 0) {
    return max - min;
  } else {
    return 0;
  }
};

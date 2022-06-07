/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-07 17:31:45                                                  *
 * @LastModifiedDate: 2022-06-07 22:26:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，和一个整数 k 。

// 对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。

// nums 的 分数 是 nums 中最大元素和最小元素的差值。

// 在更改每个下标对应的值之后，返回 nums 的最小 分数 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
  // 先变量得出nums的最大和最小值
  const n = nums.length;
  // 排序
  nums.sort((a, b) => a - b);
  let max = nums[n - 1];
  let min = nums[0];
  let ans = max - min;
  for (let i = 0; i < nums.length - 1; i++) {
    let a = nums[i],
      b = nums[i + 1];
    let high = Math.max(max - k, a + k);
    let low = Math.min(min + k, b - k);
    ans = Math.min(ans, high - low);
  }
  return ans;
};

//  min < a < max
//      a

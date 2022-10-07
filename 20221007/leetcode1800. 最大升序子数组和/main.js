/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-07 14:16:40                                                  *
 * @LastModifiedDate: 2022-10-07 14:19:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数组成的数组 nums ，返回 nums 中一个 升序 子数组的最大可能元素和。

// 子数组是数组中的一个连续数字序列。

// 已知子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，若对所有 i（l <= i < r），
// numsi < numsi+1 都成立，则称这一子数组为 升序 子数组。
// 注意，大小为 1 的子数组也视作 升序 子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let max = nums[0];
  let cur = nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      cur += nums[i];
      max = Math.max(max, cur);
    } else {
      cur = nums[i];
    }
  }
  return max;
};

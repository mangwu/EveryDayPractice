/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-19 17:02:41                                                  *
 * @LastModifiedDate: 2025-04-19 19:12:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，和两个整数 lower 和 upper ，返回 公平数对的数目 。

// 如果 (i, j) 数对满足以下情况，则认为它是一个 公平数对 ：

// 0 <= i < j < n，且
// lower <= nums[i] + nums[j] <= upper

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  // 排序后不影响答案，因为只要求符合条件的两个索引不同的数的对数
  nums.sort((a, b) => a - b);
  // 我们可以遍历i，二分查找j的范围，保证j>i即可
  // nums[j] <= upper - nums[i] && nums[j] >= lower + nums[i]
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const loweset = lower - nums[i];
    const upperest = upper - nums[i];
    let l = i + 1;
    let r = n - 1;
    // 找到第一个大于等于loweset的数
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] >= loweset) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    if (l >= n) continue;
    const start = l;
    l = i + 1;
    r = n - 1;
    // 找到第一个大于upperest的数
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] <= upperest) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    const end = l - 1;
    res += end - start + 1;
  }
  return res;
};

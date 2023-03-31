/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-31 09:00:15                                                  *
 * @LastModifiedDate: 2023-03-31 09:34:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
          res++;
        }
      }
    }
  }
  return res;
};
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  // 利用数组的严格递增特性，可以使用指针法
  const n = nums.length;
  let ans = 0;
  for (let i = 0, j = 1, k = 2; i < n - 2 && j < n - 1 && k < n; i++) {
    j = Math.max(i + 1, j);
    while (j < n - 1 && nums[j] - nums[i] < diff) {
      j++;
    }
    if (j >= n - 1) break;
    if (nums[j] - diff > nums[i]) continue;
    k = Math.max(j + 1, k);
    while (k < n && nums[k] - nums[j] < diff) {
      k++;
    }
    if (k >= n) break;
    if (nums[k] - diff > nums[j]) continue;
    ans++;
  }
  return ans;
};

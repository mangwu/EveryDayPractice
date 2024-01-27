/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-22 10:12:14                                                  *
 * @LastModifiedDate: 2024-01-22 10:30:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负整数数组 nums 和一个整数 k ，你需要将这个数组分成 k 个非空的连续子数组。

// 设计一个算法使得这 k 个子数组各自和的最大值最小。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  // 二分查找 检查当前最大值为maxNum时，是否存在一种分组使得当前它门都小于等于maxNum
  let left = Math.max.apply(null, nums);
  let right = nums.reduce((pre, cur) => pre + cur);
  const n = nums.length;
  const check = (num) => {
    let sum = 0;
    let need = 1;
    for (let i = 0; i < n; i++) {
      sum += nums[i];
      if (sum > num) {
        need++;
        sum = nums[i];
      }
    }
    return need <= k;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

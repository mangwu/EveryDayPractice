/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-29 11:23:33                                                  *
 * @LastModifiedDate: 2023-10-29 11:28:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个由正整数和 0 组成的数组 nums1 和 nums2 。

// 你必须将两个数组中的 所有 0 替换为 严格 正整数，并且满足两个数组中所有元素的和 相等 。

// 返回 最小 相等和 ，如果无法使两数组相等，则返回 -1 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
  // 先计算出每个数组的和
  let sum1 = nums1.reduce((pre, cur) => pre + cur);
  let sum2 = nums2.reduce((pre, cur) => pre + cur);
  let zero1 = nums1.reduce((pre, cur) => (cur === 0 ? ++pre : pre), 0);
  let zero2 = nums2.reduce((pre, cur) => (cur === 0 ? ++pre : pre), 0);
  // nums1最小和为sum1 + zero1
  // nums2最小和为sum2 + zero2
  let minSum1 = sum1 + zero1;
  let minSum2 = sum2 + zero2;
  if (minSum1 === minSum2) return minSum1;
  if (minSum1 > minSum2) {
    // 判断zero2是否大于0
    if (zero2 > 0) return minSum1;
    return -1;
  } else {
    if (zero1 > 0) return minSum2;
    return -1;
  }
};

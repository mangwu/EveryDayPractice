/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-01 22:30:13                                                  *
 * @LastModifiedDate: 2023-04-01 22:33:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个只包含 1 到 9 之间数字的数组 nums1 和 nums2 ，每个数组中的元素 互不相同 ，请你返回 最小 的数字，两个数组都 至少 包含这个数字的某个数位。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  // 先判断有没有重复的
  const set1 = new Set(nums1);
  let k = Infinity;
  for (const num of nums2) {
    if (set1.has(num)) {
      k = Math.min(k, num);
    }
  }
  if (k != Infinity) return k;
  let min1 = Math.min.apply(null, nums1);
  let min2 = Math.min.apply(null, nums2);
  return min1 < min2 ? parseInt(`${min1}${min2}`) : parseInt(`${min2}${min1}`);
};

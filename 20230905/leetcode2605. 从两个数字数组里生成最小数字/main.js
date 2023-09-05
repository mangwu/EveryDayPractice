/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-05 08:55:33                                                  *
 * @LastModifiedDate: 2023-09-05 09:09:50                                      *
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
  const set1 = new Set(nums1);
  let res = Infinity;
  for (const num of nums2) {
    if (set1.has(num)) res = Math.min(res, num);
  }
  if (res !== Infinity) return res;
  const cur1 = Math.min.apply(null, nums1);
  const cur2 = Math.min.apply(null, nums2);
  return Math.min(cur1 * 10 + cur2, cur2 * 10 + cur1);
};

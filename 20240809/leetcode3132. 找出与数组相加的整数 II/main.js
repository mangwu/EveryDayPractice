/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-09 08:59:17                                                  *
 * @LastModifiedDate: 2024-08-09 09:37:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 nums1 和 nums2。

// 从 nums1 中移除两个元素，并且所有其他元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。

// 执行上述操作后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等 。

// 返回能够实现数组相等的 最小 整数 x 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const n = nums2.length;
  // 最小值对应
  let x1 = nums2[0] - nums1[0];
  let x2 = nums2[0] - nums1[1];
  let x3 = nums2[0] - nums1[2];
  let j1 = 1;
  let diff1 = 0;
  let j2 = 2;
  let diff2 = 1;
  let j3 = 3;
  let diff3 = 2;
  for (let i = 1; i < n; i++) {
    while (j1 < n + 2 && nums2[i] - nums1[j1] !== x1) {
      diff1++;
      j1++;
    }
    while (j2 < n + 2 && nums2[i] - nums1[j2] !== x2) {
      diff2++;
      j2++;
    }
    while (j3 < n + 2 && nums2[i] - nums1[j3] !== x3) {
      diff3++;
      j3++;
    }
    j1++;
    j2++;
    j3++;
  }
  let res = Infinity;
  if (diff1 <= 2) res = Math.min(res, x1);
  if (diff2 <= 2) res = Math.min(res, x2);
  if (diff3 <= 2) res = Math.min(res, x3);
  return res;
};

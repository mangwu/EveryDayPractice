/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-21 22:30:31                                                  *
 * @LastModifiedDate: 2023-01-21 22:33:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 nums1 和 nums2 ，它们已经按非降序排序，请你返回两个数组的 最小公共整数 。如果两个数组 nums1 和 nums2 没有公共整数，请你返回 -1 。

// 如果一个整数在两个数组中都 至少出现一次 ，那么这个整数是数组 nums1 和 nums2 公共 的。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  const n1 = nums1.length;
  const n2 = nums2.length;
  while (nums1[i] !== nums2[j] && i < n1 && j < n2) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  if (i < n1 && j < n2 && nums1[i] === nums2[j]) {
    return nums1[i];
  }
  return -1;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-01 23:07:02                                                  *
 * @LastModifiedDate: 2022-10-01 23:13:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的数组 nums1 和 nums2 ，两个数组都只包含非负整数。请你求出另外一个数组 nums3 ，包含 nums1 和 nums2 中 所有数对 的异或和（nums1 中每个整数都跟 nums2 中每个整数 恰好 匹配一次）。

// 请你返回 nums3 中所有整数的 异或和 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  let ans = 0;
  if (n1 % 2 === 1) {
    for (const num of nums2) {
      ans ^= num;
    }
    console.log(ans);
  }
  if (n2 % 2 === 1) {
    for (const num of nums1) {
      ans ^= num;
    }
    console.log(ans);
  }
  return ans;
};

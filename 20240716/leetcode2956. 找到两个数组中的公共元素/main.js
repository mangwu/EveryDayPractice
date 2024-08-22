/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-16 08:46:59                                                  *
 * @LastModifiedDate: 2024-07-16 09:41:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，它们分别含有 n 和 m 个元素。

// 请你计算以下两个数值：

// 统计 0 <= i < n 中的下标 i ，满足 nums1[i] 在 nums2 中 至少 出现了一次。
// 统计 0 <= i < m 中的下标 i ，满足 nums2[i] 在 nums1 中 至少 出现了一次。
// 请你返回一个长度为 2 的整数数组 answer ，按顺序 分别为以上两个数值。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const hash1 = new Map();
  const hash2 = new Map();
  for (const num of nums1) hash1.set(num, (hash1.get(num) | 0) + 1);
  for (const num of nums2) hash2.set(num, (hash1.get(num) | 0) + 1);
  const ans = [0, 0];
  for (let i = 0; i < nums1.length; i++) if (hash2.get(nums1[i]) >= 1) ans[0]++;
  for (let i = 0; i < nums2.length; i++) if (hash1.get(nums2[i]) >= 1) ans[1]++;
  return ans;
};

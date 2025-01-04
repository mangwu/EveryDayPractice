/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-28 22:01:31                                                  *
 * @LastModifiedDate: 2024-12-28 22:15:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 偶数 的整数数组 nums 。你需要将这个数组分割成 nums1 和 nums2 两部分，要求：

// nums1.length == nums2.length == nums.length / 2 。
// nums1 应包含 互不相同 的元素。
// nums2也应包含 互不相同 的元素。
// 如果能够分割数组就返回 true ，否则返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  // 相同元素不能超过两个
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num) && hash.get(num) === 2) return false;
    hash.set(num, (hash.get(num) || 0) + 1);
  }
  return true;
};

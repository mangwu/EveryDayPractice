/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-11 09:49:31                                                  *
 * @LastModifiedDate: 2024-10-11 11:25:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。

// 如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j <= m - 1）。

// 返回 优质数对 的总数。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  // nums1[i] % (nums2[j] * k) === 0
  // 获取nums1的所有因数
  const hash1 = new Map();
  let max1 = 0;
  for (const num1 of nums1) {
    hash1.set(num1, (hash1.get(num1) | 0) + 1);
    max1 = Math.max(max1, num1);
  }
  let res = 0;
  const cache = new Map();
  for (const num2 of nums2) {
    if (cache.has(num2)) {
      res += cache.get(num2);
      continue;
    }
    let curRes = 0;
    for (let d = num2 * k; d <= max1; d += num2 * k) {
      curRes += hash1.get(d) | 0;
    }
    cache.set(num2, curRes);
    res += cache.get(num2);
  }
  return res;
};

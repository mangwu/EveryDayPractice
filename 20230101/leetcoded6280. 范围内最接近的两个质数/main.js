/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-01 11:02:07                                                  *
 * @LastModifiedDate: 2023-01-01 11:06:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 left 和 right ，请你找到两个整数 num1 和 num2 ，它们满足：

// left <= nums1 < nums2 <= right  。
// nums1 和 nums2 都是 质数 。
// nums2 - nums1 是满足上述条件的质数对中的 最小值 。
// 请你返回正整数数组 ans = [nums1, nums2] 。如果有多个整数对满足上述条件，请你返回 nums1 最小的质数对。如果不存在符合题意的质数对，请你返回 [-1, -1] 。

// 如果一个整数大于 1 ，且只能被 1 和它自己整除，那么它是一个质数。

// 判断是否是质数
var isFactor = function (n) {
  if (n <= 3) {
    return true;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const Factors = [];
for (let i = 2; i <= 1000000; i++) {
  if (isFactor(i)) {
    Factors.push(i);
  }
}
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  let idx = 0;
  const n = Factors.length;
  for (; idx < n; idx++) {
    if (Factors[idx] >= left) {
      break;
    }
  }
  let min = Infinity;
  let res = [-1, -1];
  for (; idx + 1 < n; idx++) {
    if (Factors[idx + 1] <= right) {
      if (min > Factors[idx + 1] - Factors[idx]) {
        min = Factors[idx + 1] - Factors[idx];
        res[0] = Factors[idx];
        res[1] = Factors[idx + 1];
      }
    } else {
      break;
    }
  }
  return res;
};

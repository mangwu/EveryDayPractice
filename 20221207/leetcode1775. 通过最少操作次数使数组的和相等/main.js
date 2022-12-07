/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-07 08:54:16                                                  *
 * @LastModifiedDate: 2022-12-07 11:30:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个长度可能不等的整数数组 nums1 和 nums2 。两个数组中的所有值都在 1 到 6 之间（包含 1 和 6）。

// 每次操作中，你可以选择 任意 数组中的任意一个整数，将它变成 1 到 6 之间 任意 的值（包含 1 和 6）。

// 请你返回使 nums1 中所有数的和与 nums2 中所有数的和相等的最少操作次数。如果无法使两个数组的和相等，请返回 -1 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  // [n1, 6n1] 与 [n2, 6n2] 不相交时返回-1
  if (n2 > 6 * n1 || n1 > 6 * n2) {
    return -1;
  }
  // 求和
  let sum1 = 0;
  let sum2 = 0;
  const hash1 = new Map();
  const hash2 = new Map();
  for (const num of nums1) {
    sum1 += num;
    hash1.has(num) ? hash1.set(num, hash1.get(num) + 1) : hash1.set(num, 1);
  }
  for (const num of nums2) {
    sum2 += num;
    hash2.has(num) ? hash2.set(num, hash2.get(num) + 1) : hash2.set(num, 1);
  }
  if (sum1 === sum2) {
    return 0;
  } else if (sum1 > sum2) {
    // nums1变小,nums2变大
    let diff = sum1 - sum2;
    // 一次变化最大为5，最小为1，贪心原则最大为主
    // 而照成变化的数字从1或6开始
    let ans = 0;
    for (let i = 1; i < 6; i++) {
      // nums2的i和nums1的7-i
      if (hash1.has(7 - i)) {
        let k = hash1.get(7 - i);
        if (diff <= (6 - i) * k) {
          ans += Math.ceil(diff / (6 - i));
          return ans;
        } else {
          ans += k;
          diff -= (6 - i) * k;
        }
      }
      if (hash2.has(i)) {
        let k = hash2.get(i);
        if (diff <= (6 - i) * k) {
          ans += Math.ceil(diff / (6 - i));
          return ans;
        } else {
          ans += k;
          diff -= (6 - i) * k;
        }
      }
    }
  } else {
    // nums1变大,nums2变小
    let diff = sum2 - sum1;
    // 一次变化最大为5，最小为1，贪心原则最大为主
    // 而照成变化的数字从1或6开始
    let ans = 0;
    for (let i = 1; i < 6; i++) {
      // nums1的i和nums2的7-i
      if (hash2.has(7 - i)) {
        let k = hash2.get(7 - i);
        if (diff <= (6 - i) * k) {
          ans += Math.ceil(diff / (6 - i));
          return ans;
        } else {
          ans += k;
          diff -= (6 - i) * k;
        }
      }
      if (hash1.has(i)) {
        let k = hash1.get(i);
        if (diff <= (6 - i) * k) {
          ans += Math.ceil(diff / (6 - i));
          return ans;
        } else {
          ans += k;
          diff -= (6 - i) * k;
        }
      }
    }
  }
};

// 1 2 3 4 5   => 15
// 1 1 1 3 3 3 4 4 => 20

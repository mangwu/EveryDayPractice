/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-23 11:05:15                                                  *
 * @LastModifiedDate: 2023-04-23 11:29:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 正 整数数组 nums 。你可以对数组执行以下操作 任意 次：

// 选择一个满足 0 <= i < n - 1 的下标 i ，将 nums[i] 或者 nums[i+1] 两者之一替换成它们的最大公约数。
// 请你返回使数组 nums 中所有元素都等于 1 的 最少 操作次数。如果无法让数组全部变成 1 ，请你返回 -1 。

// 两个正整数的最大公约数指的是能整除这两个数的最大正整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // 如果nums中存在同一个公约数就没有结果
  let common = nums[0];
  let ones = 0;
  for (const num of nums) {
    if (num === 1) ones++;
    common = gcd(num, common);
  }
  if (common > 1) return -1;
  // 是否存在两个数的公约数等于1
  // 是否存在三个数的公约数等于1
  // .... 是否存在x个数的公约数等于1
  const n = nums.length;
  for (let i = 2; i < n; i++) {
    let start = 0;
    while (start <= n - i) {
      let cur = nums[start];
      for (let j = start + 1; j < start + i; j++) {
        cur = gcd(nums[j], cur);
        if (cur === 1) {
          return n + i - 2 - ones; // 需要将去本来就有的1的个数
        }
      }
      start++;
    }
  }
  return 2 * n - 2;
};

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

//  2 3  5  7  11
// 2 6 15 35 77

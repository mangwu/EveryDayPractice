/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-14 15:58:38                                                  *
 * @LastModifiedDate: 2023-01-14 16:25:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由正整数组成的数组 nums 。

// 数字序列的 最大公约数 定义为序列中所有整数的共有约数中的最大整数。

// 例如，序列 [4,6,16] 的最大公约数是 2 。
// 数组的一个 子序列 本质是一个序列，可以通过删除数组中的某些元素（或者不删除）得到。

// 例如，[2,5,10] 是 [1,2,1,2,4,1,5,10] 的一个子序列。
// 计算并返回 nums 的所有 非空 子序列中 不同 最大公约数的 数目 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
  const maxVal = Math.max.apply(null, nums);
  const set = new Set(nums); //  相同的值效果一样，所以可以去重
  let ans = 0;
  for (let i = 1; i <= maxVal; i++) {
    // i是所有可能的公约数
    let subGcd = 0; // 求最大公约数
    for (let j = i; j <= maxVal; j += i) {
      // 这里只有保证每次递增i才能目标值i的倍数
      if (set.has(j)) {
        if (subGcd === 0) subGcd = j;
        else subGcd = gcd(j, subGcd);
        if (subGcd === i) {
          ans++;
          break; // 有这样的最大公约数可以直接退出了（因为要求的是不同 最大公约数的 数目）
        }
      }
    }
  }
  return ans;
};

var gcd = function (a, b) {
  if (b > a) return gcd(b, a);
  if (a % b === 0) return b;
  // a是大值
  while (b !== 0) [a, b] = [b, a % b];
  return a;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-03 16:36:05                                                  *
 * @LastModifiedDate: 2022-06-03 18:08:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数 n，返回 连续正整数满足所有数字之和为 n 的组数 。
/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  // 结果至少是1，本身作为一组数
  let ans = 1;
  let maxPow = Math.floor(Math.sqrt(2 * n));
  for (let i = 2; i <= maxPow; i++) {
    if ((2 * n) % i == 0) {
      let rez = (2 * n) / i - i + 1;
      if (rez % 2 == 0) {
        ans++;
      }
    }
  }
  return ans;
};

// (x + x + a - 1) * a / 2 = n 的解有几组
// (2*x + a - 1) * a = 2n;

// ()
// 如果n是奇数
// n = (n-1) / 2 + (n + 1) / 2

// 55 = 28 + 27 =

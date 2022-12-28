/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-28 16:35:49                                                  *
 * @LastModifiedDate: 2022-12-28 17:26:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个正整数如果能被 a 或 b 整除，那么它是神奇的。

// 给定三个整数 n , a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案 对 109 + 7 取模 后的值。
const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  // 手玩
  // d1 = 4, d2 = 6
  // 神奇数字：能被a或者b整除的数字，前x个里有(4的倍数+6的倍数-12的倍数)
  const lcm = getLCM(a, b);
  // 二分查找
  let left = Math.min(a, b); // 第n个数的最小值就是a,b的小者
  let right = n * Math.min(a, b); // 第n个数的最大值就是n * Math.min(a,b);
  // 计算当结果为x时，有多少个数
  const check = (d) => {
    // 检查是否满足条件
    // a倍数个数+b倍数个数-公倍数个数，是否大于等于n
    return Math.floor(d / a) + Math.floor(d / b) - Math.floor(d / lcm) >= n;
  };
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1; // 还可能取更小的
    } else {
      left = mid + 1; // 不符合条件取更大的
    }
  }
  return left % MOD;
};

/**
 * @description 求最小公倍数
 * @param {number} d1 数1
 * @param {number} d2 数2
 */
var getLCM = function (d1, d2) {
  // 两整数的乘积/最大公约数
  return (d1 * d2) / gcd(d1, d2);
};

/**
 * @description 辗转相除法求最大公约数
 * @param {number} d1 数1
 * @param {number} d2 数2
 */
var gcd = function (d1, d2) {
  if (d1 < d2) [d2, d1] = [d1, d2]; // 交换位置，保证d1大于等于d2
  while (d2 !== 0) {
    [d1, d2] = [d2, d1 % d2];
  }
  return d1;
};

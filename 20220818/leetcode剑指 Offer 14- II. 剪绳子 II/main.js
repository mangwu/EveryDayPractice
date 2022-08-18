/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-18 11:21:46                                                  *
 * @LastModifiedDate: 2022-08-18 14:10:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
// 每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
const max = Math.pow(10, 9) + 7;
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  // 动态规划
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    let curMax = dp[i - 1];
    for (let j = i - 1; j >= i / 2; j--) {
      curMax = Math.max(
        curMax,
        (i - j) * j,
        dp[i - j] * j,
        (i - j) * dp[j],
        dp[i - j] * dp[j]
      );
    }
    dp[i] = curMax % max;
  }
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n == 2) {
    return 1;
  }
  if (n == 3) {
    return 2;
  }
  if (n == 4) {
    return 4;
  }
  let ans = 1;
  while (n > 4) {
    ans *= 3;
    ans %= max;
    n -= 3;
  }
  ans *= n;
  ans %=max;
  return ans;
};

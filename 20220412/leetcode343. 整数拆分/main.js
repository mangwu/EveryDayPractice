/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-12 17:01:35                                                  *
 * @LastModifiedDate: 2022-04-12 17:13:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

// 返回 你可以获得的最大乘积 。

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // n >= 2
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  dp[1] = 1;
  let ans = 1;
  for (let i = 3; i <= n; i++) {
    let curMax = i - 1;
    for (let j = i - 1; j >= i / 2; j--) {
      curMax = Math.max(
        curMax,
        dp[j] * dp[i - j],
        j * dp[i - j],
        dp[j] * (i - j),
        j * (i - j)
      );
    }
    dp[i] = curMax;
    ans = Math.max(curMax, ans);
  }
  return ans;
};

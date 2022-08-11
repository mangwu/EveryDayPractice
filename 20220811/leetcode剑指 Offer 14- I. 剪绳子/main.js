/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-11 10:18:30                                                  *
 * @LastModifiedDate: 2022-08-11 10:30:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
// 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  // 事件复杂度过高
  let ans = 1;
  // dfs
  const dfs = (rest, pre) => {
    if (rest == 0) {
      ans = Math.max(ans, pre);
    }
    for (let i = 1; i <= rest; i++) {
      dfs(rest - i, pre * i);
    }
  };
  return ans;
};

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) {
    return n - 1;
  }
  const dp = new Array(n + 1).fill(0);
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j));
    }
  }
  return dp[n];
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 17:25:51                                                  *
 * @LastModifiedDate: 2022-06-01 17:34:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
// 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 贪心算法
  // 每次都选取最接近n的完全平方数
  let ans = 0;
  while (n > 0) {
    let k = Math.floor(Math.sqrt(n));
    n = n - k * k;
    ans++;
  }
  return ans;
};
// 这种算法是错误的，贪心的结果不一定是最少的，需要进行合理分配
// 12 => 4 + 4 + 4

// 12 => 9 + 1 + 1 + 1
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let ans = Infinity;
  // dfs，
  const dfs = (n, idx) => {
    console.log(n);
    if (n == 0) {
      ans = Math.min(ans, idx);
      return;
    }
    let k = Math.floor(Math.sqrt(n));
    for (let i = k; i >= 1; i--) {
      dfs(n - i * i, idx + 1);
    }
  };
  dfs(n, 0);
  return ans;
};
numSquares(100);

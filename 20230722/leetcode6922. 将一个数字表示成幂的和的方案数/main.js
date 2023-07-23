/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-22 23:08:11                                                  *
 * @LastModifiedDate: 2023-07-22 23:24:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 正 整数 n 和 x 。

// 请你返回将 n 表示成一些 互不相同 正整数的 x 次幂之和的方案数。换句话说，你需要返回互不相同整数 [n1, n2, ..., nk] 的集合数目，满足 n = n1x + n2x + ... + nkx 。

// 由于答案可能非常大，请你将它对 109 + 7 取余后返回。

// 比方说，n = 160 且 x = 3 ，一个表示 n 的方法是 n = 23 + 33 + 53 。
const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
  // n = n1^x + n2^x + ... + n3^x
  const cache = new Array(302).fill(0).map((v) => new Array(302).fill(-1));
  const dfs = (last, start) => {
    if (last < 0) return 0;
    if (last === 0) return 1;
    if (cache[last][start] !== -1) return cache[last][start];
    let res = 0;
    for (let i = start; i <= last; i++) {
      res += dfs(last - Math.pow(i, x), i + 1);
      res %= MOD;
    }
    cache[last][start] = res;
    return res;
  };
  return dfs(n, 1);
};

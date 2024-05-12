/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-12 22:03:38                                                  *
 * @LastModifiedDate: 2024-05-13 01:02:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 厨房里总共有 n 个橘子，你决定每一天选择如下方式之一吃这些橘子：

// 吃掉一个橘子。
// 如果剩余橘子数 n 能被 2 整除，那么你可以吃掉 n/2 个橘子。
// 如果剩余橘子数 n 能被 3 整除，那么你可以吃掉 2*(n/3) 个橘子。
// 每天你只能从以上 3 种方案中选择一种方案。

// 请你返回吃掉所有 n 个橘子的最少天数。

/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  let res = 0;
  while (n) {
    if (n % 3 === 0) {
      res++;
      n /= 3;
    } else if (n % 3 === 1) {
      res++;
      n -= 1;
    } else if (n % 2 === 0) {
      res += 1;
      n /= 2;
    } else if (n % 3 === 2) {
      res++;
      n -= 1;
    }
  }
  return res;
};

/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  const cache = new Map([
    [0, 0],
    [1, 1],
  ]);
  const dfs = (n) => {
    if (cache.has(n)) return cache.get(n);
    cache.set(
      n,
      Math.min(
        (n % 2) + 1 + dfs(Math.floor(n / 2)),
        (n % 3) + 1 + dfs(Math.floor(n / 3))
      )
    );
    return cache.get(n);
  };
  return dfs(n)
};

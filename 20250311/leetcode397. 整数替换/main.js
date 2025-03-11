/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-11 16:08:48                                                  *
 * @LastModifiedDate: 2025-03-11 16:52:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数 n ，你可以做如下操作：

// 如果 n 是偶数，则用 n / 2替换 n 。
// 如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
// 返回 n 变为 1 所需的 最小替换次数 。

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  if (n === 1) return 0;
  if (n % 2 === 0) return integerReplacement(n / 2) + 1;
  return 1 + Math.min(integerReplacement(n + 1), integerReplacement(n - 1));
};

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  const memo = new Map();
  const dfs = (n) => {
    if (n === 1) return 0;
    if (memo.has(n)) return memo.get(n);
    let res = n;
    if (n % 2 === 0) res = Math.min(res, dfs(n / 2) + 1);
    else res = Math.min(res, 1 + Math.min(dfs(n + 1), dfs(n - 1)));
    memo.set(n, res);
    return res;
  };
  return dfs(n);
};
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  // 贪心，当n % 2 === 1 时，需要选择+1或者-1
  // 如果 n % 4 === 1 那么应该减去1，因为变成 (n - 1 / 4) 需要3步（-1, /2, /2）,
  //   如果选择加上1，那么变成(n - 1) / 4 至少需要4步(+1, /2, -1, /2)
  // 如果n % 4 === 3 ，那么应该加上1，同理
  let res = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      res++;
    } else if (n % 4 === 1) {
      n--;
      res++;
    } else {
      if (n === 3) {
        // 特殊情况
        n--;
        res++;
      } else {
        n++;
        res++;
      }
    }
  }
  return res;
};
integerReplacement(8);

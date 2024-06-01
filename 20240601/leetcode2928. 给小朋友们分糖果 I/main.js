/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-01 23:02:07                                                  *
 * @LastModifiedDate: 2024-06-01 23:03:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 n 和 limit 。

// 请你将 n 颗糖果分给 3 位小朋友，确保没有任何小朋友得到超过 limit 颗糖果，请你返回满足此条件下的 总方案数 。

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let ans = 0;
  const dfs = (i, left) => {
    if (i === 3) {
      if (left === 0) ans++;
      return;
    }
    for (let j = 0; j <= Math.min(left, limit); j++) {
      dfs(i + 1, left - j);
    }
  };
  dfs(0, n);
  return ans;
};

distributeCandies(1, 2);

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-19 09:40:03                                                  *
 * @LastModifiedDate: 2023-05-19 10:14:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

// 注意：本题中，每个活字字模只能使用一次。

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const set = new Set();
  const n = tiles.length;
  const dfs = (pre, index) => {
    if (index === n) {
      set.add(pre);
      return;
    }
    // 不选当前
    dfs(pre, index + 1);
    // 选择当前
    dfs(pre + tiles[index], index + 1);
  };
  dfs("", 0);
  set.delete("");
  let res = 0;
  for (const item of set) {
    if (item.length === 1) {
      res++;
    } else {
      const hash = new Map();
      for (const tile of item) {
        hash.set(tile, (hash.get(tile) || 0) + 1);
      }
      let numerator = getFactorial(item.length);
      let denominator = 1;
      for (const [key, value] of hash) {
        denominator *= getFactorial(value);
      }
      res += numerator / denominator;
    }
  }
  return res;
};

/**
 * @description 获取阶乘
 * @param {number} n 阶乘数
 * @returns {number}
 */
var getFactorial = function (n) {
  let res = 1;
  while (n) {
    res *= n;
    n--;
  }
  return res;
};

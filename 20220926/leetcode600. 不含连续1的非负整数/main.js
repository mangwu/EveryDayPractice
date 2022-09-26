/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-26 16:03:33                                                  *
 * @LastModifiedDate: 2022-09-26 20:57:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数 n ，返回范围在 [0, n] 都非负整数中，其二进制表示不包含 连续的 1 的个数。
/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  const str = n.toString(2);
  const dp = new Array(str.length).fill(-1);
  const dfs = (i, pre, isLimit, isNum) => {
    if (i == str.length) {
      // 找到一个数，因为0也是计算在此的，所以直接返回1
      return 1;
    }
    // 判断是否重复计算
    if (!isLimit && isNum && dp[i] >= 0) return dp[i];
    let res = 0;
    // 前面都没选,现在也可以跳过
    if (!isNum) res = dfs(i + 1, 0, false, false);
    // 是否被限制
    let up = isLimit ? str[i] - "0" : 1;
    // 是否选了数字, 没选了就从1开始，选了就从0开始
    let start = isNum ? 0 : 1;
    for (let d = start; d <= up; d++) {
      pre
        ? d
          ? null
          : (res += dfs(i + 1, d, isLimit && d == up, true))
        : (res += dfs(i + 1, d, isLimit && d == up, true));
    }
    if (!isLimit && isNum) dp[i] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};

/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  const str = n.toString(2);
  const dp = new Array(str.length).fill(-1).map((_v) => new Array(2).fill(-1));
  const dfs = (i, pre, isLimit, state) => {
    if (i === str.length) {
      return 1;
    }
    if (!isLimit && dp[i][state] >= 0) return dp[i][state];
    let res = 0;
    let end = isLimit ? str[i] - "0" : 1;
    for (let d = 0; d <= end; d++) {
      if (d == pre && pre == 1) {
        continue;
      }
      res += dfs(i + 1, d, isLimit && d == end, d);
    }
    if (!isLimit) dp[i][state] = res;
    return res;
  };
  return dfs(0, -1, true, 0);
};

/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  const str = n.toString(2);
  const dp = new Array(str.length).fill(-1).map((_v) => new Array(2).fill(-1));
  const dfs = (i, pre, isLimit) => {
    if (i === str.length) {
      return 1;
    }
    if (!isLimit && dp[i][pre] >= 0) return dp[i][pre];
    let res = 0;
    let end = isLimit ? str[i] - "0" : 1;
    for (let d = 0; d <= end; d++) {
      if (d == pre && pre == 1) {
        continue;
      }
      res += dfs(i + 1, d, isLimit && d == end);
    }
    if (!isLimit) dp[i][pre] = res;
    return res;
  };
  return dfs(0, 0, true);
};

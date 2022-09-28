/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-27 09:08:33                                                  *
 * @LastModifiedDate: 2022-09-28 10:33:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定正整数 n，返回在 [1, n] 范围内具有 至少 1 位 重复数字的正整数的个数。

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
  const str = n.toString();
  const dp = new Array(str.length).fill(-1).map((v) => new Array(2).fill(-1));
  const dfs = (i, mask, state, isLimit, isNum) => {
    if (i === str.length) {
      return state ? 1 : 0;
    }
    if (dp[i][state] >= 0) return dp[i][state];
    let res = 0;
    // 跳过
    if (!isNum) res += dfs(i + 1, mask, false, false, false);
    let up = isLimit ? str[i] - "0" : 9;
    let start = isNum ? 0 : 1;
    if (state) {
      // 已经存在重复数字
      for (let d = start; d <= up; d++) {
        res += dfs(i + 1, mask | (1 << d), true, isLimit && up == d, true);
      }
    } else {
      // 不存在重复数字
      for (let d = start; d <= up; d++) {
        if (((mask >> d) & 1) == 1) {
          res += dfs(i + 1, mask | (1 << d), true, isLimit && up == d, true);
        } else {
          res += dfs(i + 1, mask | (1 << d), false, isLimit && up == d, true);
        }
      }
    }
    dp[i][state] = res;
    return res;
  };
  return dfs(0, 0, false, true, false);
};

// 上述题解错误，转化为求不重复数字即可
/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
  const str = n.toString();
  const dp = new Array(str.length).fill(0).map((v) => new Array(1024).fill(-1));
  const dfs = (i, mask, isLimit, isNum) => {
    if (i === str.length) {
      return isNum ? 1 : 0;
    }
    if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
    let res = 0;
    if (!isNum) res += dfs(i + 1, mask, false, false);
    let up = isLimit ? str[i] - "0" : 9;
    let start = isNum ? 0 : 1;
    for (let d = start; d <= up; d++) {
      if (((mask >> d) & 1) == 0) {
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true);
      }
    }
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return n - dfs(0, 0, true, false);
};

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
  const str = n.toString();
  const dp = new Array(str.length)
    .fill(0)
    .map((v) => new Array(1024).fill(-1).map((v) => new Array(2).fill(-1)));
  // flag表示是否已经重复
  const dfs = (i, mask, isLimit, isNum, flag) => {
    if (i === str.length) return isNum ? 1 : 0;
    if (!isLimit && isNum && dp[i][mask][flag] >= 0) return dp[i][mask][flag];
    let res = 0;
    // 跳过
    if (!isNum) res += dfs(i + 1, mask, false, false, false);
    let up = isLimit ? str[i] - "0" : 9;
    let start = isNum ? 0 : 1;
    for (let d = start; d <= up; d++) {
      if (flag) {
        // 已经有重复的了
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true, 1);
      } else if (((mask >> d) & 1) == 1) {
        // 本次重复
        res += dfs(i + 1, mask, isLimit && d == up, true, 1);
      } else {
        // 没有重复，且本次也不重复
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true, 0);
      }
    }
    if (!isLimit && isNum) dp[i][mask][flag] = res;
    return res;
  };
  return dfs(0, 0, true, false, 0);
};

/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
  const str = n.toString();
  const dp = new Array(str.length).fill(0).map((v) => new Array(2).fill(-1));
  // flag表示是否已经重复
  const dfs = (i, mask, isLimit, isNum, flag) => {
    if (i === str.length) return isNum ? 1 : 0;
    if (!isLimit && isNum && dp[i][flag] >= 0) return dp[i][flag];
    let res = 0;
    // 跳过
    if (!isNum) res += dfs(i + 1, mask, false, false, false);
    let up = isLimit ? str[i] - "0" : 9;
    let start = isNum ? 0 : 1;
    for (let d = start; d <= up; d++) {
      if (flag) {
        // 已经有重复的了
        res += dfs(i + 1, 0, isLimit && d == up, true, 1);
      } else if (((mask >> d) & 1) == 1) {
        // 本次重复
        res += dfs(i + 1, 0, isLimit && d == up, true, 1);
      } else {
        // 没有重复，且本次也不重复
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true, 0);
      }
    }
    if (!isLimit && isNum) dp[i][flag] = res;
    return res;
  };
  return dfs(0, 0, true, false, 0);
};

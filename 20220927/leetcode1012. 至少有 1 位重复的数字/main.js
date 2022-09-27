/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-27 09:08:33                                                  *
 * @LastModifiedDate: 2022-09-27 11:30:31                                      *
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

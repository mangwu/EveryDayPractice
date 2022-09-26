/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-26 15:35:00                                                  *
 * @LastModifiedDate: 2022-09-26 15:40:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {number}
 */
var numberOf2sInRange = function (n) {
  const str = n.toString();
  const dp = new Array(str.length).fill(0).map((v) => new Array(9).fill(-1));
  const dfs = (i, mask, isLimit, isNum) => {
    if (i == str.length) {
      return mask;
    }
    if (!isLimit && isNum && dp[i][mask] > 0) return dp[i][mask];
    let res = 0;
    if (!isNum) res = dfs(i + 1, mask, false.false);
    let up = isLimit ? str[i] - "0" : 9;
    let start = isNum ? 0 : 1;
    for (let d = start; d <= up; d++) {
      d == 2
        ? (res += dfs(i + 1, mask + 1, isLimit && d == up, true))
        : (res += dfs(i + 1, mask, isLimit && d == up, true));
    }
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};

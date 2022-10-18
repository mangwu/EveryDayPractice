/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 08:46:23                                                  *
 * @LastModifiedDate: 2022-10-18 09:02:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个按 非递减顺序 排列的数字数组 digits 。你可以用任意次数 digits[i] 来写的数字。
// 例如，如果 digits = ['1','3','5']，我们可以写数字，如 '13', '551', 和 '1351315'。

// 返回 可以生成的小于或等于给定整数 n 的正整数的个数 。

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
  const str = n.toString();
  const len = str.length;
  const dp = new Array(str.length).fill(-1);
  const dfs = (i, isLimit, isNum) => {
    if (i === len) {
      return isNum ? 1 : 0;
    }
    // 没有被限制，且前面有数字并且dp有数字
    if (!isLimit && isNum && dp[i] !== -1) {
      return dp[i];
    }
    let res = 0;
    // 未选择数字
    if (!isNum) res += dfs(i + 1, false, false);
    let start = isNum ? 0 : 1;
    let up = isLimit ? parseInt(str[i]) : 9;
    for (const digit of digits) {
      if (digit - "0" >= start && digit - "0" <= up) {
        res += dfs(i + 1, isLimit && digit - "0" === up, true);
      }
      if (digit - "0" > up) {
        break;
      }
    }
    if (!isLimit && isNum) dp[i] = res;
    return res;
  };
  return dfs(0, true, false);
};

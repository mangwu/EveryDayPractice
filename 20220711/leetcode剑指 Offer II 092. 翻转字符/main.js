/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-11 09:29:10                                                  *
 * @LastModifiedDate: 2022-07-12 15:43:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个由 '0' 和 '1' 组成的字符串，是以一些 '0'（可能没有 '0'）后面跟着一些 '1'（也可能没有 '1'）的形式组成的，
// 那么该字符串是 单调递增 的。

// 我们给出一个由字符 '0' 和 '1' 组成的字符串 s，我们可以将任何 '0' 翻转为 '1' 或者将 '1' 翻转为 '0'。

// 返回使 s 单调递增 的最小翻转次数。

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  // 计算总共0，1的格式
  let ones = 0;
  let zeroes = 0;
  for (const ch of s) {
    if (ch == "0") {
      zeroes++;
    } else {
      ones++;
    }
  }
  const n = s.length;
  // 默认翻转全部0
  let ans = zeroes;
  // 从头开始，判断从这里分割（前面是0，后面是1）需要翻转的个数
  let curOnes = 0;
  let curZeroes = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == "0") {
      curZeroes++;
    } else {
      curOnes++;
    }
    // 右边的总数，减去右边的1数就是右边的0数
    let rightZeroes = n - i - 1 - (ones - curOnes);
    // 左边的1数加上右边的0数就是需要翻转的次数
    ans = Math.min(rightZeroes + curOnes, ans);
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  // 动态规划
  let dp0 = 0;
  let dp1 = 0;
  for (const ch of s) {
    if (ch == "1") {
      dp0++;
    } else {
      dp1 = Math.min(dp1 + 1, dp0);
    }
  }
  return Math.min(dp0, dp1);
};

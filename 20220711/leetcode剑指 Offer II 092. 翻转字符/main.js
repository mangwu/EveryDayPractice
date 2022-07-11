/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-11 09:29:10                                                  *
 * @LastModifiedDate: 2022-07-11 10:01:04                                      *
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
  // dp[i][0] dp[i][1]分别表示s字符串在第i位时，如果此时的最后一位是0的最小翻转数，以及最后一位是1的最小翻转数
  // 遍历s，实际最后一位为s[i]
  // 如果s[i] == "1" 则dp[i][0] = dp[i-1][0] + 1 ，dp[i][1]不变
  // 如果s[i] == "0" 则dp[i][0] 很前面的一致, dp[i][1] 选取dp[i-1][1] + 1 和dp[i-1][0]的小值
  // 因为只需要最后一个dp[n-1]，所以不用保存所有动态规划结果,只需保存上一步结果
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

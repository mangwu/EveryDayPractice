/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-14 08:56:17                                                  *
 * @LastModifiedDate: 2022-10-14 09:57:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s，计算 s 的 不同非空子序列 的个数。因为结果可能很大，
// 所以返回答案需要对 10^9 + 7 取余 。

// 字符串的 子序列 是经由原字符串删除一些（也可能不删除）字符但不改变剩余字符相对位置的一个新字符串。

// 例如，"ace" 是 "abcde" 的一个子序列，但 "aec" 不是。
const MAX = Math.pow(10, 9) + 7;
/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const hash = new Map();
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i + 1] = dp[i];
    if (!hash.has(s[i])) {
      dp[i + 1] += dp[i] + 1;
      hash.set(s[i], [i]);
    } else {
      const idxes = hash.get(s[i]);
      dp[i + 1] += dp[i] + 1;
      for (const idx of idxes) {
        dp[i + 1] -= dp[idx + 1] - dp[idx];
      }
      idxes.push(i);
    }
    dp[i + 1] %= MAX;
  }
  return dp[n];
};

// 已知前i-1个元素的子序列个数
// 求前i个元素的子序列个数
// 不包含 第i个元素 的子序列个数 即dp[i-1]
// 包含 第i个元素 的子序列个数
//    如果第i个元素是新字母，那么就是dp[i-1] + 1
//    如果第i个元素不是新字母，找到每个相同的字母，减去包含该相同字母的重复数量  dp[i-1] + 1 - dp[a1] - dp[a2] - ...

// abbb

// a  => 1
// b  => 1 + 1 + 1  => 3
// b  => 3 + 3 + 1 - (3 - 1) => 5
// b  => 5 + 5 + 1 - (3 - 1) - (5 - 3)

/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const hash = new Map();
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i + 1] += dp[i] * 2 + 1;
    if (hash.has(s[i])) {
      const idxes = hash.get(s[i]);
      for (const idx of idxes) {
        dp[i + 1] -= dp[idx + 1] - dp[idx];
      }
      idxes.push(i);
    } else {
      hash.set(s[i], [i]);
    }
    if (dp[i + 1] < 0) {
      while (dp[i + 1] < 0) {
        dp[i + 1] += MAX;
      }
    } else {
      dp[i + 1] %= MAX;
    }
  }
  return dp[n];
};

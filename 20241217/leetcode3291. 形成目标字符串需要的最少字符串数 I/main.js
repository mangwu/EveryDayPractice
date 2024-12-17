/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-17 10:58:14                                                  *
 * @LastModifiedDate: 2024-12-17 13:54:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words 和一个字符串 target。

// 如果字符串 x 是 words 中 任意 字符串的
// 前缀
// ，则认为 x 是一个 有效 字符串。

// 现计划通过 连接 有效字符串形成 target ，请你计算并返回需要连接的 最少 字符串数量。如果无法通过这种方式形成 target，则返回 -1

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function (words, target) {
  // 保存前缀
  const set = new Set();
  for (const word of words) {
    let cur = "";
    for (const ch of word) {
      cur = cur + ch;
      set.add(cur);
    }
  }
  const max = Number.MAX_SAFE_INTEGER;
  const n = target.length;
  const dp = new Array(n).fill(max);
  if (set.has(target[0])) dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let cur = "";
    for (let j = i; j >= 0; j--) {
      cur = target[j] + cur;
      if (set.has(cur)) {
        dp[i] = Math.min(dp[i], (dp[j - 1] || 0) + 1);
      }
    }
  }
  return dp[n - 1] >= max ? -1 : dp[n - 1];
};

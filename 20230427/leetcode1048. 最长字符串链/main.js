/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-27 08:44:35                                                  *
 * @LastModifiedDate: 2023-04-27 09:05:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给出一个单词数组 words ，其中每个单词都由小写英文字母组成。

// 如果我们可以 不改变其他字符的顺序 ，在 wordA 的任何地方添加 恰好一个 字母使其变
// 成 wordB ，那么我们认为 wordA 是 wordB 的 前身 。

// 例如，"abc" 是 "abac" 的 前身 ，而 "cba" 不是 "bcad" 的 前身
// 词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word1 是
// word2 的前身，word2 是 word3 的前身，依此类推。一个单词通常是 k == 1 的 单词链 。

// 从给定单词列表 words 中选择单词组成词链，返回 词链的 最长可能长度 。

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);
  // words
  // dp[i] 以words[i]为单词链尾的最长单词链长度
  const n = words.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 1;
  let res = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (words[i].length > words[j].length + 1) break;
      if (aIsBsTailWord(words[i], words[j])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

/**
 * @description b是a的前身吗
 * @param {string} a
 * @param {string} b
 */
var aIsBsTailWord = function (a, b) {
  const lena = a.length;
  const lenb = b.length;
  if (lena !== lenb + 1) return false;
  let diff = 0;
  let ia = 0;
  let ib = 0;
  while (ia < lena) {
    if (a[ia] !== b[ib]) {
      diff++;
      ia++;
    } else {
      ia++;
      ib++;
    }
    if (diff > 1) return false;
  }
  return diff === 1;
};

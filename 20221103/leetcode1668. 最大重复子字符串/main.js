/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-03 09:15:39                                                  *
 * @LastModifiedDate: 2022-11-03 09:43:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，
// 那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。
// 如果 word 不是 sequence 的子串，那么重复值 k 为 0 。

// 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  if (sequence.length < word.length) {
    return 0;
  }
  let ans = 0;
  while (sequence.indexOf(word.repeat(ans + 1)) !== -1) {
    ans++;
  }
  return ans;
};

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  if (sequence.length < word.length) {
    return 0;
  }
  // 一次遍历
  let ans = 0;
  const n = sequence.length;
  const m = word.length;
  for (let i = 0; i < n; i++) {
    let idx = 0;
    let start = i;
    while (sequence[start] === word[idx % m]) {
      idx++;
      start++;
    }
    ans = Math.max(ans, Math.floor(idx / m));
  }
  return ans;
};

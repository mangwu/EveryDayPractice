/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-01 22:35:03                                                  *
 * @LastModifiedDate: 2023-04-01 22:39:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，一个字符 互不相同 的字符串 chars 和一个长度与 chars 相同的整数数组 vals 。

// 子字符串的开销 是一个子字符串中所有字符对应价值之和。空字符串的开销是 0 。

// 字符的价值 定义如下：

// 如果字符不在字符串 chars 中，那么它的价值是它在字母表中的位置（下标从 1 开始）。
// 比方说，'a' 的价值为 1 ，'b' 的价值为 2 ，以此类推，'z' 的价值为 26 。
// 否则，如果这个字符在 chars 中的位置为 i ，那么它的价值就是 vals[i] 。
// 请你返回字符串 s 的所有子字符串中的最大开销。

/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function (s, chars, vals) {
  const aphla = new Array(26).fill(0).map((v, i) => i + 1);
  let res = 0;
  const n = chars.length;
  for (let i = 0; i < n; i++) {
    aphla[chars[i].charCodeAt() - "a".charCodeAt()] = vals[i];
  }
  let cur = 0;
  for (const ch of s) {
    cur += aphla[ch.charCodeAt() - "a".charCodeAt()];
    res = Math.max(res, cur);
    if (cur < 0) cur = 0;
  }
  return res;
};

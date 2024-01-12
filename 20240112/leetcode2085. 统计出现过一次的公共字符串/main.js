/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-12 08:59:29                                                  *
 * @LastModifiedDate: 2024-01-12 09:10:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const hash1 = new Map();
  const hash2 = new Map();
  let ans = 0;
  for (const word of words1) hash1.set(word, (hash1.get(word) | 0) + 1);
  for (const word of words2) hash2.set(word, (hash2.get(word) | 0) + 1);
  for (const [word, n] of hash1) if (n === 1 && hash2.get(word) === 1) ans++;
  return ans;
};

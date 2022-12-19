/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-18 10:30:14                                                  *
 * @LastModifiedDate: 2022-12-18 10:37:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串数组 words 。

// 如果两个字符串由相同的字符组成，则认为这两个字符串 相似 。

// 例如，"abca" 和 "cba" 相似，因为它们都由字符 'a'、'b'、'c' 组成。
// 然而，"abacba" 和 "bcfd" 不相似，因为它们不是相同字符组成的。
// 请你找出满足字符串 words[i] 和 words[j] 相似的下标对 (i, j) ，并返回下标对的数目，其中 0 <= i < j <= word.length - 1 。

/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  const n = words.length;
  const wordsSet = [];
  for (const word of words) {
    const cur = new Array(26).fill(0);
    for (const ch of word) {
      let idx = ch.charCodeAt() - "a".charCodeAt();
      if (!cur[idx]) {
        cur[idx] = 1;
      }
    }
    wordsSet.push(cur.toString());
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (wordsSet[i] === wordsSet[j]) {
        res++;
      }
    }
  }
  return res;
};

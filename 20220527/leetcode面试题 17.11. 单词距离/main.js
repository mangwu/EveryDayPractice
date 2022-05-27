/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-27 09:06:03                                                  *
 * @LastModifiedDate: 2022-05-27 09:16:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有个内含单词的超大文本文件，给定任意两个不同的单词，
// 找出在这个文件中这两个单词的最短距离(相隔单词数)。
// 如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let idx1 = null;
  let idx2 = null;
  const n = words.length;
  let ans = n;
  for (let i = 0; i < n; i++) {
    if (words[i] == word1) {
      if (idx2 !== null) {
        ans = Math.min(i - idx2, ans);
      }
      idx1 = i;
    } else if (words[i] == word2) {
      if (idx1 !== null) {
        ans = Math.min(i - idx1, ans);
      }

      idx2 = i;
    }
  }
  return ans;
};

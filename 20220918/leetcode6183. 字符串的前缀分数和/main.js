/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-18 10:52:38                                                  *
 * @LastModifiedDate: 2022-09-18 10:57:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的数组 words ，该数组由 非空 字符串组成。

// 定义字符串 word 的 分数 等于以 word 作为 前缀 的 words[i] 的数目。

// 例如，如果 words = ["a", "ab", "abc", "cab"] ，那么 "ab" 的分数是 2 ，
// 因为 "ab" 是 "ab" 和 "abc" 的一个前缀。
// 返回一个长度为 n 的数组 answer ，
// 其中 answer[i] 是 words[i] 的每个非空前缀的分数 总和 。

// 注意：字符串视作它自身的一个前缀。

/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  const hash = new Map();
  for (const word of words) {
    for (let i = 1; i <= word.length; i++) {
      const prex = word.substring(0, i);
      if (hash.has(prex)) {
        hash.set(prex, hash.get(prex) + 1);
      } else {
        hash.set(prex, 1);
      }
    }
  }
  const ans = [];
  for (const word of words) {
    let cur = 0;
    for (let i = 1; i <= word.length; i++) {
      cur += hash.get(word.substring(0, i));
    }
    ans.push(cur);
  }
  return ans;
};

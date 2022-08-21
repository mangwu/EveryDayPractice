/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-21 13:39:40                                                  *
 * @LastModifiedDate: 2022-08-21 13:47:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 sentence 作为句子并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。
// 请你检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。

// 如果 searchWord 是某一个单词的前缀，则返回句子 sentence 中该单词所对应的下标（下标从 1 开始）。
// 如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。
// 如果 searchWord 不是任何单词的前缀，则返回 -1 。

// 字符串 s 的 前缀 是 s 的任何前导连续子字符串。

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(/\s/);
  const n = words.length;
  for (let i = 0; i < n; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
};

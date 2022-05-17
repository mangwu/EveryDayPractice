/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-17 09:20:44                                                  *
 * @LastModifiedDate: 2022-05-17 09:38:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 某种外星语也使用英文小写字母，但可能顺序 order 不同。
// 字母表的顺序（order）是一些小写字母的排列。

// 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，
// 返回 true；否则，返回 false。

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // order
  const hash = new Map();
  for (let i = 0; i < 26; i++) {
    hash.set(order[i], i);
  }
  // 比较两个单词的字典顺序
  const len = words.length;
  for (let i = 1; i < len; i++) {
    if (!isDictSort(words[i - 1], words[i], hash)) {
      return false;
    }
  }
  return true;
};
// 比较两个单词的字典顺序
const isDictSort = (word1, word2, hash) => {
  const m = word1.length;
  const n = word2.length;
  const k = Math.min(m, n);
  for (let i = 0; i < k; i++) {
    // 前面的单词顺序在后面的之后
    if (hash.get(word1[i]) > hash.get(word2[i])) {
      return false;
    } else if (hash.get(word1[i]) < hash.get(word2[i])) {
      return true;
    }
  }
  // 前面k个单词相同，最后比较大小，小的应该在前面
  return m <= n;
};

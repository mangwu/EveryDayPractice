/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 22:42:32                                                  *
 * @LastModifiedDate: 2022-10-29 22:46:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串数组 queries 和 dictionary 。数组中所有单词都只包含小写英文字母，且长度都相同。

// 一次 编辑 中，你可以从 queries 中选择一个单词，将任意一个字母修改成任何其他字母。从 queries 中找到所有满足以下条件的字符串：不超过 两次编辑内，字符串与 dictionary 中某个字符串相同。

// 请你返回 queries 中的单词列表，这些单词距离 dictionary 中的单词 编辑次数 不超过 两次 。单词返回的顺序需要与 queries 中原本顺序相同。

/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const ans = [];
  for (const querie of queries) {
    for (const dic of dictionary) {
      if (canDiff(querie, dic)) {
        ans.push(querie);
        break;
      }
    }
  }
  return ans;
};

var canDiff = function (word1, word2) {
  const n = word1.length;
  let diff = 0;
  for (let i = 0; i < n; i++) {
    if (word1[i] !== word2[i]) {
      diff++;
    }
  }
  return diff <= 2;
};

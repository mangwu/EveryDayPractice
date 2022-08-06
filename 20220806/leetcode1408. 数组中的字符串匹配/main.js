/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-06 14:44:16                                                  *
 * @LastModifiedDate: 2022-08-06 15:50:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。
// 请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。

// 如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，
// 那么字符串 words[i] 就是 words[j] 的一个子字符串。

//

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const n = words.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (words[j].includes(words[i])) {
          ans.push(words[i]);
          break;
        }
      }
    }
  }
  return ans;
};


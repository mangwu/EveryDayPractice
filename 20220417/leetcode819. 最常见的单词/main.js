/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-17 22:14:28                                                  *
 * @LastModifiedDate: 2022-04-17 22:57:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。
// 返回出现次数最多，同时不在禁用列表中的单词。

// 题目保证至少有一个词不在禁用列表中，而且答案唯一。

// 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const set = new Set(banned);
  const words = paragraph.toLocaleLowerCase().matchAll(/\w+/g);
  const hash = new Map();
  let max = 0;
  let ans = null;
  for (const word of words) {
    if (set.has(word[0])) {
      continue;
    }
    let num = hash.get(word[0]);
    if (num) {
      hash.set(word[0], num + 1);
      num++;
    } else {
      hash.set(word[0], 1);
      num = 1;
    }
    if (num > max) {
      ans = word[0];
      max = num;
    }
  }
  return ans;
};

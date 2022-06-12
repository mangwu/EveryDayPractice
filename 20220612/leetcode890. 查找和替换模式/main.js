/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-12 13:53:59                                                  *
 * @LastModifiedDate: 2022-06-12 15:06:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。

// 如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，
// 我们就得到了所需的单词，那么单词与模式是匹配的。

// （回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，
// 没有两个字母映射到同一个字母。）

// 返回 words 中与给定模式匹配的单词列表。

// 你可以按任何顺序返回答案。

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  // pattern中的一个个字符应该和words中的一一对应
  const n = pattern.length;
  let ans = [];
  for (const word of words) {
    const hash = new Map();
    const set = new Set();
    let isPattern = true;
    for (let i = 0; i < n; i++) {
      // 全新匹配
      if (hash.has(pattern[i])) {
        if (hash.get(pattern[i]) !== word[i]) {
          isPattern = false;
          break;
        }
      } else {
        if (set.has(word[i])) {
          isPattern = false;
          break;
        }
        hash.set(pattern[i], word[i]);
        set.add(word[i]);
      }
    }
    if (isPattern) {
      ans.push(word);
    }
  }
  return ans;
};

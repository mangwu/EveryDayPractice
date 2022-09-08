/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-07 09:25:04                                                  *
 * @LastModifiedDate: 2022-09-07 09:47:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 text ，该字符串由若干被空格包围的单词组成。每个单词由一个或者多个小写英文字母组成，
// 并且两个单词之间至少存在一个空格。题目测试用例保证 text 至少包含一个单词 。

// 请你重新排列空格，使每对相邻单词之间的空格数目都 相等 ，并尽可能 最大化 该数目。如果不能重新平均分配所有空格，
// 请 将多余的空格放置在字符串末尾 ，这也意味着返回的字符串应当与原 text 字符串的长度相等。

// 返回 重新排列空格后的字符串 。
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  const space = text.split(/[^\s]+/).join("");
  const newStr = text.trim();
  const words = newStr.split(/\s+/);
  const wordsNum = words.length;
  const spaceLen = space.length;
  if (wordsNum == 1) {
    return words.join("") + space;
  }
  let splitSpace = Math.floor(spaceLen / (wordsNum - 1));
  let lastSpace = spaceLen % (wordsNum - 1);
  return words.join(" ".repeat(splitSpace)) + " ".repeat(lastSpace);
};

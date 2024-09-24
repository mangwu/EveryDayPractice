/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-24 09:07:56                                                  *
 * @LastModifiedDate: 2024-09-24 10:08:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 text 和另一个下标从 0 开始且长度为 2 的字符串 pattern ，两者都只包含小写英文字母。

// 你可以在 text 中任意位置插入 一个 字符，这个插入的字符必须是 pattern[0] 或者 pattern[1] 。注意，这个字符可以插入在 text 开头或者结尾的位置。

// 请你返回插入一个字符后，text 中最多包含多少个等于 pattern 的 子序列 。

// 子序列 指的是将一个字符串删除若干个字符后（也可以不删除），剩余字符保持原本顺序得到的字符串。

/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
  if (pattern[0] === pattern[1]) {
    // 相同字符
    let chNum = 1;
    for (const ch of text) if (ch === pattern[0]) chNum++;
    return ((chNum - 1) * chNum) / 2;
  }
  let oneNum = 0;
  let secondNum = 0;
  for (const ch of text)
    if (ch === pattern[0]) oneNum++;
    else if (ch === pattern[1]) secondNum++;
  let res = 0;
  let curSecond = secondNum;
  for (const ch of text) {
    if (ch === pattern[0]) res += curSecond;
    else if (ch === pattern[1]) curSecond--;
  }
  return Math.max(oneNum, secondNum) + res;
};
/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
  let res = 0,
    oneNum = 0,
    secondNum = 0;
  for (const ch of text) {
    if (ch === pattern[1]) {
      secondNum++;
      res += oneNum;
    }
    if (ch === pattern[0]) {
      oneNum++;
    }
  }
  return res + Math.max(oneNum, secondNum);
};

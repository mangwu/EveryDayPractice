/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-23 21:58:11                                                  *
 * @LastModifiedDate: 2022-03-23 22:13:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。
// 返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(/\s+/);
  const len = arr.length - 1;
  return arr[len] ? arr[len].length : arr[len - 1].length;
};
lengthOfLastWord("Hello World");
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const len = s.length;
  let start = 0;
  let end = len - 1;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] == " " && end == i) {
      end--;
      continue;
    }
    if (s[i] == " ") {
      start = i + 1;
      break;
    }
  }
  // 不是空就需要加1
  return end - start + 1;
};

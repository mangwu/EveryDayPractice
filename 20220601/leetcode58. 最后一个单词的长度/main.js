/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 10:34:06                                                  *
 * @LastModifiedDate: 2022-06-01 10:38:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const n = s.length;
  let len = 0;
  let idx = n - 1;
  let hasWord = false;
  for (; idx >= 0; idx--) {
    if (hasWord && s[idx] == " ") {
      idx++;
      break;
    }
    if (s[idx] !== " ") {
      hasWord = true;
      len++;
    }
  }
  return len;
};

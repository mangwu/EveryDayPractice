/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-26 19:58:56                                                  *
 * @LastModifiedDate: 2022-10-26 20:10:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

// 请注意，你可以假定字符串里不包括任何不可打印的字符。
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (!s) {
    return 0;
  }
  let pre = s[0];
  const n = s.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (s[i] == " ") {
      if (pre !== " ") {
        ans++;
      }
    }
    pre = s[i];
  }
  return pre == " " ? ans : ans + 1;
};

// 请注意，你可以假定字符串里不包括任何不可打印的字符。
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(/\s+/).filter((v) => v).length;
};

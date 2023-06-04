/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-03 21:44:05                                                  *
 * @LastModifiedDate: 2023-06-03 22:54:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。

// 给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。

/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const hash = new Map();
  const n = text.length;
  for (let i = 0; i < n; i++) {
    let start = i;
    while (i < n && text[i] === text[i + 1]) {
      i++;
    }
    hash.has(text[start])
      ? hash.get(text[start]).push([start, i])
      : hash.set(text[start], [[start, i]]);
  }
  let res = 0;
  for (const [_key, value] of hash) {
    const m = value.length;
    if (m === 1) {
      res = Math.max(res, value[0][1] - value[0][0] + 1);
    } else if (value.length === 2) {
      if (value[1][0] - value[0][1] === 2) {
        res = Math.max(res, value[1][1] - value[0][0]);
      } else {
        res = Math.max(
          res,
          value[0][1] - value[0][0] + 2,
          value[1][1] - value[1][0] + 2
        );
      }
    } else {
      res = Math.max(
        res,
        value[0][1] - value[0][0] + 2,
        value[m - 1][1] - value[m - 1][0] + 2
      );
      for (let i = 1; i < m - 1; i++) {
        if (value[i][0] - value[i - 1][1] === 2) {
          res = Math.max(res, value[i][1] - value[i - 1][0] + 1);
        } else {
          res = Math.max(res, value[i][1] - value[i][0] + 2);
        }
      }
    }
  }
  return res;
};

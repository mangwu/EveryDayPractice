/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-27 18:42:48                                                  *
 * @LastModifiedDate: 2023-01-27 19:01:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由英文字母组成的字符串 s ，请你找出并返回 s 中的 最好 英文字母。返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。

// 最好 英文字母的大写和小写形式必须 都 在 s 中出现。

// 英文字母 b 比另一个英文字母 a 更好 的前提是：英文字母表中，b 在 a 之 后 出现。

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let res = "";
  const set = new Set();
  for (const ch of s) {
    if (ch >= "a" && ch <= "z") {
      // 小写
      let cur = ch.toLocaleUpperCase();
      if (set.has(cur)) {
        res = maxCh(res, cur);
      }
    } else {
      // 大写
      if (set.has(ch.toLocaleLowerCase())) {
        res = maxCh(res, ch);
      }
    }
    set.add(ch);
  }
  return res;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var maxCh = function (a, b) {
  if (a.charCodeAt() > b.charCodeAt()) return a;
  return b;
};

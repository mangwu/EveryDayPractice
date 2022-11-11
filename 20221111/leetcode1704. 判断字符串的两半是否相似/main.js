/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-11 08:55:06                                                  *
 * @LastModifiedDate: 2022-11-11 08:59:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。

// 两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。注意，s 可能同时含有大写和小写字母。

// 如果 a 和 b 相似，返回 true ；否则，返回 false 。

const hash = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const n = s.length;
  let half = n / 2;
  let front = 0;
  for (let i = 0; i < half; i++) {
    if (hash.has(s[i])) {
      front++;
    }
  }
  let back = 0;
  for (let i = half; i < n; i++) {
    if (hash.has(s[i])) {
      back++;
    }
  }
  return front === back;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-01 08:58:46                                                  *
 * @LastModifiedDate: 2022-11-01 09:04:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。

// 数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let i1 = 0;
  let i2 = 0;
  let j1 = 0;
  let j2 = 0;
  const n1 = word1.length;
  const n2 = word2.length;
  while (i1 < n1 && i2 < n2) {
    let ch1 = word1[i1][j1];
    let ch2 = word2[i2][j2];
    if (ch1 !== ch2) {
      return false;
    }
    j1++;
    j2++;
    if (j1 === word1[i1].length) {
      i1++;
      j1 = 0;
    }
    if (j2 === word2[i2].length) {
      i2++;
      j2 = 0;
    }
  }
  return i1 === n1 && i2 === n2;
};

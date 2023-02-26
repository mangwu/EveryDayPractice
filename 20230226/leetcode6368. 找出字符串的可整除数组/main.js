/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-26 15:22:42                                                  *
 * @LastModifiedDate: 2023-02-26 15:37:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 word ，长度为 n ，由从 0 到 9 的数字组成。另给你一个正整数 m 。

// word 的 可整除数组 div  是一个长度为 n 的整数数组，并满足：

// 如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
// 否则，div[i] = 0
// 返回 word 的可整除数组。
/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  const n = word.length;
  const res = [];
  let pre = 0;
  for (let i = 0; i < n; i++) {
    let cur = pre + parseInt(word[i]);
    let remainder = cur % m;
    if (remainder === 0) {
      res.push(1);
      pre = 0;
    } else {
      res.push(0);
      pre = remainder * 10;
    }
  }
  return res;
};

/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  let res = [],
    pre = 0;
  for (const ch of word) {
    pre = (pre * 10 + parseInt(ch)) % m;
    res.push(Number(pre === 0));
  }
  return res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-27 10:33:38                                                  *
 * @LastModifiedDate: 2022-11-27 10:44:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个仅由小写英文字母组成的字符串 s 和 t 。

// 现在需要通过向 s 末尾追加字符的方式使 t 变成 s 的一个 子序列 ，返回需要追加的最少字符数。

// 子序列是一个可以由其他字符串删除部分（或不删除）字符但不改变剩下字符顺序得到的字符串。

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  // 按顺序遍历t，查找s上相同的字符
  let i = 0;
  const tLen = t.length;
  const sLen = s.length;
  let idx = 0;
  while (i < tLen) {
    while (idx < sLen && s[idx] !== t[i]) {
      idx++;
    }
    if (s[idx] === t[i]) {
      idx++;
      i++;
    }
    if (idx >= sLen) {
      break;
    }
  }
  return tLen - i;
};

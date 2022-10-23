/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-23 14:21:55                                                  *
 * @LastModifiedDate: 2022-10-23 14:24:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。
// 如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

// 返回 合并后的字符串 。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const len = Math.max(word1.length, word2.length);
  let ans = "";
  for (let i = 0; i < len; i++) {
    let ch1 = word1[i] ? word1[i] : "";
    let ch2 = word2[i] ? word2[i] : "";
    ans += ch1 + ch2;
  }
  return ans;
};

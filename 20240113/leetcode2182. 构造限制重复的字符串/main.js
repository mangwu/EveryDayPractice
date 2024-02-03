/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-13 23:19:46                                                  *
 * @LastModifiedDate: 2024-01-13 23:51:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const words = new Array(26).fill(0);
  const aCode = "a".charCodeAt();
  for (const ch of s) {
    words[ch.charCodeAt() - aCode]++;
  }
  let ans = "";
  let j = 24;
  for (let i = 25; i >= 0; i--) {
    j = Math.min(i - 1, j);
    while (words[i]) {
      // 先判断上一个使用的隔断是否和当前字符相同
      if (String.fromCharCode(aCode + i) === ans[ans.length - 1]) {
        // 最多使用repeatLimit - 1 个
        let repeatNum = Math.min(repeatLimit - 1, words[i]);
        words[i] -= repeatNum;
        ans += String.fromCharCode(aCode + i).repeat(repeatNum);
      } else if (words[i] >= repeatLimit) {
        ans += String.fromCharCode(aCode + i).repeat(repeatLimit);
        words[i] -= repeatLimit; 
      } else {
        ans += String.fromCharCode(aCode + i).repeat(words[i]);
        words[i] = 0;
      }
      // 通过j找到下一个可以可以利用的字符
      while (j >= 0 && words[j] === 0) j--;
      if (j >= 0 && words[j] !== 0) {
        ans += String.fromCharCode(aCode + j);
        words[j]--;
      } else if (j < 0) return ans;
    }
  }
  return ans;
};

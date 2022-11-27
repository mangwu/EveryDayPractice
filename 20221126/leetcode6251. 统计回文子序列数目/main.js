/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-26 23:08:18                                                  *
 * @LastModifiedDate: 2022-11-26 23:28:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你数字字符串 s ，请你返回 s 中长度为 5 的 回文子序列 数目。由于答案可能很大，请你将答案对 109 + 7 取余 后返回。

// 提示：

// 如果一个字符串从前往后和从后往前读相同，那么它是 回文字符串 。
// 子序列是一个字符串中删除若干个字符后，不改变字符顺序，剩余字符构成的字符串。

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromes = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map((v) => new Array(6).fill(0));
  const dfs = (i) => {
    
  };
};

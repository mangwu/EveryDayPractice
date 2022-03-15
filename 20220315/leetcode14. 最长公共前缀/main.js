/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-15 20:00:59                                                  *
 * @LastModifiedDate: 2022-03-15 20:07:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
// 动态规划题

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 当前的最长前缀 = 前面i个的共同前缀和当字符串的交集
  const len = strs.length;
  let ans = len ? strs[0] : "";
  for (let i = 1; i < len; i++) {
    // 计算共同前缀
    let j = 1;
    while (strs[i].substring(0, j) == ans.substring(0, j) && j <= ans.length) {
      j++;
    }
    ans = ans.substring(0, j - 1);
  }
  return ans;
};

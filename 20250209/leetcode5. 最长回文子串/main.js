/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-09 23:58:45                                                  *
 * @LastModifiedDate: 2025-02-10 01:38:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，找到 s 中最长的
// 回文

// 子串
// 。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  let maxNum = 1;
  let str = s[0];
  for (let i = 1; i < n; i++) {
    // 从中心向两边搜索
    let left = i - 1;
    let right = i;
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    left++;
    right--;
    if (right - left + 1 > maxNum) {
      maxNum = right - left + 1;
      str = s.substring(left, right + 1);
    }
    left = i - 1;
    right = i + 1;
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    left++;
    right--;
    if (right - left + 1 > maxNum) {
      maxNum = right - left + 1;
      str = s.substring(left, right + 1);
    }
  }
  return str;
};

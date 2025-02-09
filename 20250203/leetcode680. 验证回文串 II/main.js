/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-03 23:45:08                                                  *
 * @LastModifiedDate: 2025-02-03 23:47:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，最多 可以从中删除一个字符。

// 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] !== s[n - i - 1]) {
      // 删除s[i]或者删除s[n-i-1]
      return isPalindrome(s, i, n - i - 2) || isPalindrome(s, i + 1, n - i - 1);
    }
  }
  return true;
};

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true
}

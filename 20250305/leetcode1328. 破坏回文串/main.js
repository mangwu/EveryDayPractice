/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 08:55:48                                                  *
 * @LastModifiedDate: 2025-03-05 09:17:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由小写英文字母组成的回文字符串 palindrome ，请你将其中 一个 字符用任意小写英文字母替换，使得结果字符串的 字典序最小 ，且 不是 回文串。

// 请你返回结果字符串。如果无法做到，则返回一个 空串 。

// 如果两个字符串长度相同，那么字符串 a 字典序比字符串 b 小可以这样定义：在 a 和 b 出现不同的第一个位置上，字符串 a 中的字符严格小于 b 中的对应字符。例如，"abcc” 字典序比 "abcd" 小，因为不同的第一个位置是在第四个字符，显然 'c' 比 'd' 小。

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  const n = palindrome.length;
  if (n === 1) return "";
  const half = Math.floor(n / 2);
  const strArr = palindrome.split("");
  for (let i = 0; i < half; i++) {
    if (palindrome[i] === "a") continue;
    strArr[i] = "a";
    return strArr.join("");
  }
  // 如果前半段都是a，后半段也就都是a，那么只改最后一个字符
  strArr[n - 1] = "b";
  return strArr.join("");
};

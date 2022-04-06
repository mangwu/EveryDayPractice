/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-06 23:43:57                                                  *
 * @LastModifiedDate: 2022-04-06 23:48:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const hash = new Set(["a", "e", "i", "o", "u","A",'E','I','O','U']);
  // 左右指针
  const len = s.length;
  let left = 0;
  let right = len - 1;
  const arr = s.split("");
  while (left < right) {
    if (hash.has(s[left]) && hash.has(s[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
      continue;
    }
    if (!hash.has(s[left])) {
      left++;
    }
    if (!hash.has(s[right])) {
      right--;
    }
  }
  return arr.join("");
};

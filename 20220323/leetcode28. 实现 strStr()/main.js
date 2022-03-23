/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-23 21:41:19                                                  *
 * @LastModifiedDate: 2022-03-23 21:55:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

//

// 说明：

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。
// 这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const matchArr = haystack.match(needle);
  if (matchArr) {
    return matchArr.index;
  }
  return -1;
};
strStr("hello", "");

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == "") {
    return 0;
  }
  const len1 = haystack.length;
  const len2 = needle.length;
  for (let i = 0; i <= len1 - len2; i++) {
    if (haystack[i] == needle[0]) {
      if (haystack.substring(i, i + len2) == needle) {
        return i;
      }
    }
  }
  return -1;
};

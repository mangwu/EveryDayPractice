/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-16 22:32:53                                                  *
 * @LastModifiedDate: 2024-06-16 22:35:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 a 和 b，请返回 这两个字符串中 最长的特殊序列  的长度。如果不存在，则返回 -1 。

// 「最长特殊序列」 定义如下：该序列为 某字符串独有的最长
// 子序列
// （即不能是其他字符串的子序列） 。

// 字符串 s 的子序列是在从 s 中删除任意数量的字符后可以获得的字符串。

// 例如，"abc" 是 "aebdc" 的子序列，因为删除 "aebdc" 中斜体加粗的字符可以得到 "abc" 。 "aebdc" 的子序列还包括 "aebdc" 、 "aeb" 和 "" (空字符串)。

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a.length !== b.length) return Math.max(a.length, b.length);
  if (a === b) return -1;
  return a.length;
};

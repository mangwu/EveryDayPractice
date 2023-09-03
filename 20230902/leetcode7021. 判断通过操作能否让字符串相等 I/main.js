/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-02 22:32:35                                                  *
 * @LastModifiedDate: 2023-09-02 22:38:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 s1 和 s2 ，两个字符串的长度都为 4 ，且只包含 小写 英文字母。

// 你可以对两个字符串中的 任意一个 执行以下操作 任意 次：

// 选择两个下标 i 和 j 且满足 j - i = 2 ，然后 交换 这个字符串中两个下标对应的字符。
// 如果你可以让字符串 s1 和 s2 相等，那么返回 true ，否则返回 false 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
  // 也就是s1[0] s1[2] 和 s2[0] s2[2] 相等
  const str1_1 = [s1[0], s1[2]].sort().join("");
  const str2_1 = [s2[0], s2[2]].sort().join("");
  const str1_2 = [s1[1], s1[3]].sort().join("");
  const str2_2 = [s2[1], s2[3]].sort().join("");
  return str1_1 === str2_1 && str1_2 === str2_2;
};

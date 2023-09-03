/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-02 22:38:54                                                  *
 * @LastModifiedDate: 2023-09-02 22:43:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 s1 和 s2 ，两个字符串长度都为 n ，且只包含 小写 英文字母。

// 你可以对两个字符串中的 任意一个 执行以下操作 任意 次：

// 选择两个下标 i 和 j ，满足 i < j 且 j - i 是 偶数，然后 交换 这个字符串中两个下标对应的字符。

// 如果你可以让字符串 s1 和 s2 相等，那么返回 true ，否则返回 false 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  const str1_1 = [];
  const str2_1 = [];
  const str1_2 = [];
  const str2_2 = [];
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      // 偶数
      str1_1.push(s1[i]);
      str2_1.push(s2[i]);
    } else {
      // 奇数
      str1_2.push(s1[i]);
      str2_2.push(s2[i]);
    }
  }
  str1_1.sort();
  str1_2.sort();
  str2_1.sort();
  str2_2.sort();
  return (
    str1_1.join("") === str2_1.join("") && str1_2.join("") === str2_2.join("")
  );
};

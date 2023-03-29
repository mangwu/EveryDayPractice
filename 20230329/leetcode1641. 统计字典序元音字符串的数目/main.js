/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-29 08:41:54                                                  *
 * @LastModifiedDate: 2023-03-29 08:50:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n，请返回长度为 n 、仅由元音 (a, e, i, o, u) 组成且按 字典序排列 的字符串数量。

// 字符串 s 按 字典序排列 需要满足：对于所有有效的 i，s[i] 在字母表中的位置总是与 s[i+1] 相同或在 s[i+1] 之前。

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  // 1 : a1 e1 i1 o1 u1 各一个
  // 2 : a1 e2 i3 o4 u5
  // 3 : a1 e3 i6 o10 u15
  // 4 : a1 e4 i10 o20 u35
  // 5 : a1 e5 i15 o35 u70
  const arr = [1, 1, 1, 1, 1];
  // 求前缀和
  while (n > 1) {
    for (let i = 1; i < 5; i++) {
      arr[i] += arr[i - 1];
    }
    n--;
  }
  return arr.reduce((pre, cur) => pre + cur);
};

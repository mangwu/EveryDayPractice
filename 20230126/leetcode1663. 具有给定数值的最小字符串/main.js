/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-26 18:56:56                                                  *
 * @LastModifiedDate: 2023-01-26 19:48:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小写字符 的 数值 是它在字母表中的位置（从 1 开始），因此 a 的数值为 1 ，b 的数值为 2 ，c 的数值为 3 ，以此类推。

// 字符串由若干小写字符组成，字符串的数值 为各字符的数值之和。例如，字符串 "abe" 的数值等于 1 + 2 + 5 = 8 。

// 给你两个整数 n 和 k 。返回 长度 等于 n 且 数值 等于 k 的 字典序最小 的字符串。

// 注意，如果字符串 x 在字典排序中位于 y 之前，就认为 x 字典序比 y 小，有以下两种情况：

// x 是 y 的一个前缀；
// 如果 i 是 x[i] != y[i] 的第一个位置，且 x[i] 在字母表中的位置比 y[i] 靠前。

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  // 能使用的a的个数
  let z = Math.floor(k / 26); // z的数量
  while (k - z * 26 < n - z) {
    z--;
  }
  let m = n - z; // 非z字母数量
  if (m === 0) {
    return "z".repeat(z);
  }
  const rest = k - z * 26; // 前面非z的字母数字和
  let code = rest - (m - 1); // 最后一位字母的位数
  return (
    "a".repeat(m - 1) +
    String.fromCharCode(code + "a".charCodeAt() - 1) +
    "z".repeat(z)
  );
};

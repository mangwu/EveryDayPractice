/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-04-07 10:38:39                                                  *
 * @LastModifiedDate: 2024-04-07 10:54:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 和一个整数 k 。

// 定义函数 distance(s1, s2) ，用于衡量两个长度为 n 的字符串 s1 和 s2 之间的距离，即：

// 字符 'a' 到 'z' 按 循环 顺序排列，对于区间 [0, n - 1] 中的 i ，计算所有「 s1[i] 和 s2[i] 之间 最小距离」的 和 。
// 例如，distance("ab", "cd") == 4 ，且 distance("a", "z") == 1 。

// 你可以对字符串 s 执行 任意次 操作。在每次操作中，可以将 s 中的一个字母 改变 为 任意 其他小写英文字母。

// 返回一个字符串，表示在执行一些操作后你可以得到的 字典序最小 的字符串 t ，且满足 distance(s, t) <= k 。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (s, k) {
  // 优先变化前面的字符
  const n = s.length;
  const arr = s.split("");
  const aCode = "a".charCodeAt();
  // 将abcdef变为0-25的索引
  for (let i = 0; i < n; i++) {
    if (k <= 0) break;
    const iCode = s[i].charCodeAt();
    if (iCode === aCode) continue;
    let decDiff = iCode - aCode;
    let incDiff = 26 - iCode + aCode;
    if (decDiff <= k || incDiff <= k) {
      k -= Math.min(decDiff, incDiff);
      arr[i] = "a";
    } else if (decDiff > k && incDiff > k) {
      // 二者都大于将当前字符削减k位
      arr[i] = String.fromCharCode(iCode - k);
      k = 0;
    }
  }
  return arr.join("");
};

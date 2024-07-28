/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-27 23:00:55                                                  *
 * @LastModifiedDate: 2024-07-27 23:06:57                                      *
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
  let n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    const dis = getDistance(ch, "a");
    if (dis <= k) {
      k -= dis;
    } else {
      const curCh = String.fromCharCode(ch.charCodeAt() - k);
      return "a".repeat(i) + curCh + s.substring(i + 1);
    }
  }
  return "a".repeat(n);
};

/**
 * @description
 * @param {string} ch1
 * @param {string} ch2
 * @returns {number}
 */
function getDistance(ch1, ch2) {
  const dis = Math.abs(ch1.charCodeAt() - ch2.charCodeAt());
  return Math.min(dis, 26 - dis);
}

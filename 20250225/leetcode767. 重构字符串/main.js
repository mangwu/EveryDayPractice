/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 09:32:00                                                  *
 * @LastModifiedDate: 2025-02-25 10:41:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，检查是否能重新排布其中的字母，使得两相邻的字符不同。

// 返回 s 的任意可能的重新排列。若不可行，返回空字符串 "" 。

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  // 检查最多字符是否超过总字符的一半以上
  const n = s.length;
  const hash = new Map();
  let maxNum = 1;
  for (const ch of s) {
    hash.set(ch, (hash.get(ch) || 0) + 1);
    maxNum = Math.max(maxNum, hash.get(ch));
  }
  const half = Math.floor((n + 1) / 2);
  if (maxNum >= half + 1) return "";
  // 优先分配奇数下标，条件是当前数值个数不大于总数一半
  const res = new Array(n).fill(0);
  let oddIdx = 1;
  let evenIdx = 0;
  for (let [key, value] of hash) {
    while (value > 0 && value <= n / 2 && oddIdx < n) {
      res[oddIdx] = key;
      oddIdx += 2;
      value--;
    }
    while (value > 0) {
      res[evenIdx] = key;
      value--;
      evenIdx += 2;
    }
  }
  return res.join("");
};

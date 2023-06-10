/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-10 22:34:27                                                  *
 * @LastModifiedDate: 2023-06-10 23:07:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 s ，这个字符串只包含 0 到 9 的数字字符。

// 如果一个字符串 t 中至多有一对相邻字符是相等的，那么称这个字符串是 半重复的 。

// 请你返回 s 中最长 半重复 子字符串的长度。

// 一个 子字符串 是一个字符串中一段连续 非空 的字符。

/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
  // 滑动窗口
  let res = 1;
  let left = 0;
  let right = 0;
  const n = s.length;
  let pre = 0;
  while (right < n) {
    if (s[right] === s[right - 1]) {
      pre = right;
      right++;
      break;
    }
    right++;
  }
  if (right === n) return n;
  while (right < n) {
    let flag = true;
    while (right < n) {
      if (s[right] === s[right - 1]) {
        // 找到了第二个
        res = Math.max(res, right - left);
        left = pre;
        pre = right;
        right++;
        flag = false;
        break;
      }
      right++;
    }
    // 没有遍历到
    if (flag) {
      res = Math.max(res, right - left);
    }
  }
  return res;
};

// "0001"
// 输出：
// 2
// 预期：
// 3

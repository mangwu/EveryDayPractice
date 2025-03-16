/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-16 22:05:54                                                  *
 * @LastModifiedDate: 2025-03-16 22:46:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 字符串的 波动 定义为子字符串中出现次数 最多 的字符次数与出现次数 最少 的字符次数之差。

// 给你一个字符串 s ，它只包含小写英文字母。请你返回 s 里所有 子字符串的 最大波动 值。

// 子字符串 是一个字符串的一段连续字符序列。

/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  const n = s.length;
  const chars = [...new Set(s.split(""))];
  let res = 0;
  for (const c0 of chars) {
    for (const c1 of chars) {
      if (c0 !== c1) {
        let f = 0;
        let g = -Infinity;
        for (let i = 0; i < n; i++) {
          if (s[i] === c0) {
            // +1
            f = Math.max(f, 0) + 1;
            g = g + 1;
          } else if (s[i] === c1) {
            // -1;
            g = Math.max(f, g, 0) - 1;
            f = Math.max(f, 0) - 1;
          }
          res = Math.max(res, g);
        }
      }
    }
  }
  return res;
};

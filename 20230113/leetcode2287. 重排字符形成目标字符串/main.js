/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-13 09:02:48                                                  *
 * @LastModifiedDate: 2023-01-13 09:20:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的字符串 s 和 target 。你可以从 s 取出一些字符并将其重排，得到若干新的字符串。

// 从 s 中取出字符并重新排列，返回可以形成 target 的 最大 副本数。

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const hash1 = new Map();
  for (const ch of target) {
    hash1.has(ch) ? hash1.set(ch, hash1.get(ch) + 1) : hash1.set(ch, 1);
  }
  const hash2 = new Map();
  for (const ch of s) {
    hash2.has(ch) ? hash2.set(ch, hash2.get(ch) + 1) : hash2.set(ch, 1);
  }
  let ans = Infinity;
  for (const [key, value] of hash1) {
    if (hash2.has(key)) {
      ans = Math.min(ans, Math.floor(hash2.get(key) / value));
    } else {
      return 0;
    }
  }
  return ans;
};

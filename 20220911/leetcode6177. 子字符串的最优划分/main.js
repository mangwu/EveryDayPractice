/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-11 10:57:17                                                  *
 * @LastModifiedDate: 2022-09-11 11:09:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，请你将该字符串划分成一个或多个 子字符串 ，
// 并满足每个子字符串中的字符都是 唯一 的。
// 也就是说，在单个子字符串中，字母的出现次数都不超过 一次 。

// 满足题目要求的情况下，返回 最少 需要划分多少个子字符串。

// 注意，划分后，原字符串中的每个字符都应该恰好属于一个子字符串。

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  const set = new Set();
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      // 重复字母
      ans++;
      set.clear();
      set.add(s[i]);
    }
  }
  return ans + 1;
};

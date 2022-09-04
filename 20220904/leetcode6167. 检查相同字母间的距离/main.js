/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-04 10:32:54                                                  *
 * @LastModifiedDate: 2022-09-04 10:37:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 s ，该字符串仅由小写英文字母组成，s 中的每个字母都 恰好 出现 两次 。
// 另给你一个下标从 0 开始、长度为 26 的的整数数组 distance 。

// 字母表中的每个字母按从 0 到 25 依次编号（即，'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25）。

// 在一个 匀整 字符串中，第 i 个字母的两次出现之间的字母数量是 distance[i] 。
// 如果第 i 个字母没有在 s 中出现，那么 distance[i] 可以 忽略 。

// 如果 s 是一个 匀整 字符串，返回 true ；否则，返回 false 。

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (
      s[i + distance[s[i].charCodeAt() - 97] + 1] == s[i] ||
      s[i - distance[s[i].charCodeAt() - 97] - 1] == s[i]
    ) {
      continue;
    }
    return false;
  }
  return true;
};

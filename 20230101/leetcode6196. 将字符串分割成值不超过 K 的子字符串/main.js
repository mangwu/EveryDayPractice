/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-01 10:43:02                                                  *
 * @LastModifiedDate: 2023-01-01 11:01:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，它每一位都是 1 到 9 之间的数字组成，同时给你一个整数 k 。

// 如果一个字符串 s 的分割满足以下条件，我们称它是一个 好 分割：

// s 中每个数位 恰好 属于一个子字符串。
// 每个子字符串的值都小于等于 k 。
// 请你返回 s 所有的 好 分割中，子字符串的 最少 数目。如果不存在 s 的 好 分割，返回 -1 。

// 注意：

// 一个字符串的 值 是这个字符串对应的整数。比方说，"123" 的值为 123 ，"1" 的值是 1 。
// 子字符串 是字符串中一段连续的字符序列。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function (s, k) {
  const n = s.length;
  let res = 0;
  if (k < 9) {
    for (const ch of s) {
      if (parseInt(ch) > k) {
        return -1;
      }
    }
    return n;
  }
  for (let i = 0; i < n; i++) {
    let cur = 0;
    while (i < n && k > cur) {
      cur *= 10;
      cur += parseInt(s[i]);
      if (cur > k) {
        break;
      }
      i++;
    }
    if (i == n) {
      if (cur <= k) {
        return res + 1;
      } else {
        res++;
        if (parseInt(s[n - 1]) <= k) {
          return res + 1;
        } else {
          return -1;
        }
      }
    }
    res++;
    i--;
  }
  return res;
};

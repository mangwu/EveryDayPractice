/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-18 10:35:49                                                  *
 * @LastModifiedDate: 2024-02-18 10:42:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 正整数 数组 arr1 和 arr2 。

// 正整数的 前缀 是其 最左边 的一位或多位数字组成的整数。例如，123 是整数 12345 的前缀，而 234 不是 。

// 设若整数 c 是整数 a 和 b 的 公共前缀 ，那么 c 需要同时是 a 和 b 的前缀。例如，5655359 和 56554 有公共前缀 565 ，而 1223 和 43456 没有 公共前缀。

// 你需要找出属于 arr1 的整数 x 和属于 arr2 的整数 y 组成的所有数对 (x, y) 之中最长的公共前缀的长度。

// 返回所有数对之中最长公共前缀的长度。如果它们之间不存在公共前缀，则返回 0 。

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  // 保存arr1或arr2的所有前缀，
  const m = arr1.length;
  const n = arr2.length;
  if (m > n) return longestCommonPrefix(arr2, arr1);
  const set = new Set();
  for (const num of arr1) {
    const word = num.toString();
    let cur = "";
    for (const ch of word) {
      cur += ch;
      set.add(cur);
    }
  }
  let ans = 0;
  for (const num of arr2) {
    const word = num.toString();
    if (word.length <= ans) continue;
    let cur = "";
    for (const ch of word) {
      cur += ch;
      if (set.has(cur)) {
        ans = Math.max(cur.length, ans);
      } else break;
    }
  }
  return ans;
};

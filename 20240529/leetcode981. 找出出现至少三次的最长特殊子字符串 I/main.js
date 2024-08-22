/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-29 09:21:07                                                  *
 * @LastModifiedDate: 2024-05-29 09:42:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由小写英文字母组成的字符串 s 。

// 如果一个字符串仅由单一字符组成，那么它被称为 特殊 字符串。例如，字符串 "abc" 不是特殊字符串，而字符串 "ddd"、"zz" 和 "f" 是特殊字符串。

// 返回在 s 中出现 至少三次 的 最长特殊子字符串 的长度，如果不存在出现至少三次的特殊子字符串，则返回 -1 。

// 子字符串 是字符串中的一个连续 非空 字符序列。

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    let start = i;
    while (i + 1 < n && s[i + 1] === ch) {
      // 相同连续字符
      i++;
    }
    for (let j = start; j <= i; j++) {
      const curStr = ch.repeat(j - start + 1);
      hash.set(curStr, (hash.get(curStr) | 0) + i - j + 1);
    }
  }
  let ans = -1;
  for (const [str, num] of hash) {
    if (num >= 3) ans = Math.max(ans, str.length);
  }
  return ans;
};

// 5 aaaaa
// 5 a
// 4 aa
// 3 aaa
// 2 aaaa
// 1 aaaaa

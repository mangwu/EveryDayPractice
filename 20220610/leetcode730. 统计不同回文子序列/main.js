/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-10 09:24:39                                                  *
 * @LastModifiedDate: 2022-06-10 09:45:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个字符串 s，返回 s 中不同的非空「回文子序列」个数 。

// 通过从 s 中删除 0 个或多个字符来获得子序列。

// 如果一个字符序列与它反转后的字符序列一致，那么它是「回文字符序列」。

// 如果有某个 i , 满足 ai != bi ，则两个序列 a1, a2, ... 和 b1, b2, ... 不同。

// 注意：

// 结果可能很大，你需要对 109 + 7 取模 。
const MODNUM = Math.pow(10, 9) + 7;

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function (s) {
  // s数量级在 10^3 可以使用O(n^2)解法
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (hash.has(s[i])) {
      const arr = hash.get(s[i]);
      arr.push(i);
      hash.set(s[i], arr);
    } else {
      hash.set(s[i], [i]);
    }
  }
  const dfs = (start, end) => {
    if (start == end) {
      return 1;
    }
    const centre = dfs(start + 1, end - 1);
  };
};

// bccb
// 求出以第一个b开头的回文子字符序列
// b bb bcb bccb
// 求出以第二个c开头的回文子字符序列
// c cc

// s[i]仅含有a b c d

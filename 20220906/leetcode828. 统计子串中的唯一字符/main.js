/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-06 09:00:13                                                  *
 * @LastModifiedDate: 2022-09-06 10:46:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。

// 例如：s = "LEETCODE" ，则其中 "L", "T","C","O","D" 都是唯一字符，因为它们只出现一次，
// 所以 countUniqueChars(s) = 5 。

// 本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。
// 输入用例保证返回值为 32 位整数。

// 注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串
// （也就是说，你必须统计 s 的所有子字符串中的唯一字符）。

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  // ABC
  // 1 + 2 + 3
  const hash = new Map();
  let n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (hash.has(ch)) {
      hash.get(ch).push(i);
    } else {
      const arr = [-1, i];
      hash.set(ch, arr);
    }
  }
  let res = 0;
  for (const [ch, arr] of hash) {
    arr.push(n);
    for (let i = 1; i < arr.length - 1; i++) {
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
    }
  }
  return res;
};

// a
// 1
// ab
// 1 * 2 + 2 * 1 = 4 = 1 + 3 = 1 + 1 + 2
// abc
// 1 * 3 + 2 * 2 + 3 * 1 = 10 = 1 + 3 + 6 = 1 + 1 + 2 + 3 + 3
// abcd
// 1 * 4 + 2 * 3 + 3 * 2 + 4 = 4 + 6 + 6 + 4 = 20 = 1 + 3 + 6 + 10 = 1 + 1 + 2 + 2 + 3 + 3 + 1 + 2 + 3 + 4
// abcde
// 1 * 5 + 2 * 4 + 3 * 3 + 4 * 2 + 5 = 35 = 1 + 3 + 6 + 10 + 15
// 3 6 10 15
// abcdef
// 6 + 10 + 12 + 12 + 10 + 6 = 56
// abcdefg
// 7 + 12 + 15 + 16 + 15 + 12 + 7 = 84

// 3 6 10 15 21 28
// 2 3 4 5 6 7

// aba
// 1 + 3 = 4
// ba 4

// 1 + 1 + 2
// 1 + 1 + 2  + 1 + 2 + 3
// 1 + 1 + 2 + 1 + 2 + 3 + 4
// 1 + 1 + 2 + 1 + 2 + 3 + 4 + 5
// (1 + n)n / 2

// leetcode
// 1 + 3 + 1 + 3 + 6 + 10 + 15 + 35
// 92

// ABAB
// 1 + 3 + 4 + 1 + 3
// ABAT 16
// 1 + 3 + 1 + 4 + 6
// leet 12
// 1 + 3 + 1 + 1 + 1 + 3 + 1 + 3
// leeet
// 1 + 3 + 4 + 1 + 1 + 1 + 3
// lee
// 1 + 1 + 3 + 1

// 1 + 4 + 1
// LEET
// 1 +

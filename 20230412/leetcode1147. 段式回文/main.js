/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-12 08:47:53                                                  *
 * @LastModifiedDate: 2023-04-12 09:58:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:

// subtexti 是 非空 字符串
// 所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
// 对于所有 i 的有效值( 即 1 <= i <= k ) ，subtexti == subtextk - i + 1 均成立
// 返回k可能最大值。

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
  if (isPlalindrome(text)) return text.length;
  const hash = new Map();
  const n = text.length;
  for (let i = 0; i < n; i++)
    hash.has(text[i]) ? hash.get(text[i]).push(i) : hash.set(text[i], [i]);
  const half = Math.floor(n / 2);
  // 0123456
  // 012345
  const dp = new Array(n).fill(-1);
  const getLongestDecomposition = (cur) => {
    if (cur === half && n % 2 === 1) {
      return 1;
    }
    if (cur === half && n % 2 === 0) {
      return 0;
    }
    if (cur > half) return 0;
    if (dp[cur] !== -1) return dp[cur];
    const arr = hash.get(text[cur]);
    const m = arr.length;
    let res = 1;
    for (let i = m - 1; i > 0; i--) {
      if (arr[i] >= n / 2 && arr[i] < n - cur) {
        let front = text.substring(cur, n - arr[i]);
        let end = text.substring(arr[i], n - cur);
        if (front === end) {
          res = Math.max(getLongestDecomposition(n - arr[i]) + 2, res);
        }
      }
    }
    dp[cur] = res;
    return res;
  };
  return getLongestDecomposition(0);
};
// 012345678

var isPlalindrome = function (text) {
  const n = text.length;
  for (let i = 0; i < n / 2; i++) if (text[i] !== text[n - i - 1]) return false;
  return true;
};

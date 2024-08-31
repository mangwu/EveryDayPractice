/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-28 16:15:23                                                  *
 * @LastModifiedDate: 2024-08-28 17:24:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，你需要将它分割成一个或者更多的 平衡 子字符串。比方说，s == "ababcc" 那么 ("abab", "c", "c") ，("ab", "abc", "c") 和 ("ababcc") 都是合法分割，但是 ("a", "bab", "cc") ，("aba", "bc", "c") 和 ("ab", "abcc") 不是，不平衡的子字符串用粗体表示。

// 请你返回 s 最少 能分割成多少个平衡子字符串。

// 注意：一个 平衡 字符串指的是字符串中所有字符出现的次数都相同。

/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(n);
  dp[n - 1] = 1;
  dp[n] = 0;
  const check = (cnt) => {
    if (cnt.size === 0) return false;
    let preNum = null;
    for (const [key, num] of cnt) {
      if (preNum === null) preNum = num;
      else if (preNum !== num) return false;
    }
    return true;
  };
  for (let i = n - 2; i >= 0; i--) {
    const cnt = new Map([[s[i], 1]]);
    dp[i] = dp[i + 1] + 1;
    for (let j = i + 1; j < n; j++) {
      cnt.set(s[j], (cnt.get(s[j]) || 0) + 1);
      if (check(cnt)) {
        dp[i] = Math.min(dp[i], 1 + dp[j + 1]);
      }
    }
  }
  return dp[0];
};

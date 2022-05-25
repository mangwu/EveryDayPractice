/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-25 15:08:03                                                  *
 * @LastModifiedDate: 2022-05-25 17:25:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 把字符串 s 看作是 “abcdefghijklmnopqrstuvwxyz” 的无限环绕字符串，所以 s 看起来是这样的：

// "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...." .
// 现在给定另一个字符串 p 。返回 s 中 唯一 的 p 的 非空子串 的数量 。

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  const dp = new Array(26).fill(0);
  // 寻找字典连续的子字符串然后添加
  let left = 0;
  let right = 1;
  const n = p.length;
  let ans = 0;
  while (right < n) {
    while (
      right < n &&
      (p[right].charCodeAt() - p[right - 1].charCodeAt() == 1 ||
        p[right].charCodeAt() - p[right - 1].charCodeAt() == -25)
    ) {
      // 连续
      right++;
    }

    dp[p[left].charCodeAt() - "a".charCodeAt()] = Math.max(
      dp[p[left].charCodeAt() - "a".charCodeAt()],
      right - left
    );
    left = right;
    right++;
  }
  for (const val of dp) {
    ans += val;
  }
  return ans;
};

var findSubstringInWraproundString = function (p) {
  const dp = new Array(26).fill(0);
  let k = 0;
  for (let i = 0; i < p.length; ++i) {
    if (i > 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() + 26) % 26 === 1) {
      // 字符之差为 1 或 -25
      ++k;
    } else {
      k = 1;
    }
    dp[p[i].charCodeAt() - "a".charCodeAt()] = Math.max(
      dp[p[i].charCodeAt() - "a".charCodeAt()],
      k
    );
  }
  let ans = 0;
  for (const val of dp) {
    ans += val;
  }
  return ans;
};

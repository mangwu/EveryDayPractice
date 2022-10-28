/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-28 09:04:40                                                  *
 * @LastModifiedDate: 2022-10-28 10:13:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

// 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 注意：a + b 意味着字符串 a 和 b 连接。
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  // 模拟
  const n = s1.length;
  const m = s2.length;
  let s1First = "";
  let s2First = "";
  const len = Math.max(m, n);
  for (let i = 0; i < len; i++) {
    let ch1 = s1[i] ? s1[i] : "";
    let ch2 = s2[i] ? s2[i] : "";
    s1First += ch1 + ch2;
    s2First += ch2 + ch1;
  }
  return s3 === s1First || s3 === s2First;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  // 模拟
  const n = s1.length;
  const m = s2.length;
  if (m + n !== s3.length) {
    return false;
  }
  // 双指针
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  while (idx1 < n || idx2 < m) {
    if (s1[idx1] === s3[idx3]) {
      idx1++;
      idx3++;
      if (idx1 === n) {
        idx2++;
      }
    } else if (s2[idx2] === s3[idx3]) {
      idx2++;
      idx3++;
      if (idx2 === n) {
        idx1++;
      }
    } else {
      return false;
    }
  }
  return true;
};
// a
// 1 0
// a
// 2 0
// d
// 2 1
// b
// 3 1
// b
// 3 2
// c
// 4 2
// b
// 4 3
// c
// 5 3
// a

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  // 模拟
  const n = s1.length;
  const m = s2.length;
  const k = s3.length;
  if (m + n !== k) {
    return false;
  }
  let news2 = "";
  let idx1 = 0;
  for (let i = 0; i < k; i++) {
    if (s3[i] === s1[idx1]) {
      idx1++;
    } else {
      news2 += s3[i];
    }
  }
  return news2 === s2;
};
("ab");
("aa");
("abaa");

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const n = s1.length;
  const m = s2.length;
  const k = s3.length;
  if (m + n !== k) {
    return false;
  }
  // 动态规划
  const dp = new Array(n + 1)
    .fill(false)
    .map((_v) => new Array(m + 1).fill(false));
  // 需要考虑空字符串,所以使用n和m
  dp[0][0] = true;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      let cur = i + j - 1;
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[cur]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[cur]);
      }
    }
  }
  return dp[n][m];
};

("aabc");
("abad");
//_    ___
("aabadabc");

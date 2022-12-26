/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-25 10:37:10                                                  *
 * @LastModifiedDate: 2022-12-26 13:54:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由字符 'a'、'b'、'c' 组成的字符串 s 和一个非负整数 k 。每分钟，你可以选择取走 s 最左侧 还是 最右侧 的那个字符。

// 你必须取走每种字符 至少 k 个，返回需要的 最少 分钟数；如果无法取到，则返回 -1 。
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  // 判断能否取到
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    hash.has(s[i]) ? hash.get(s[i]).push(i) : hash.set(s[i], [i]);
  }
  let maxFront = 0;
  let maxBack = 0;
  for (const [key, value] of hash) {
    if (value.length < k) {
      return -1;
    }
    // 选取k个字符
    let res = value[k - 1] + 1;
    let front = res + 1;
    let back = 0;
    for (let i = 1; i <= k; i++) {
      let cur =
        n -
        value[value.length - i] +
        (k - i - 1 >= 0 ? value[k - i - 1] + 1 : 0);
      if (cur < res) {
        res = cur;
        front = k - i - 1 >= 0 ? value[k - i - 1] + 1 : 0;
        back = n - value[value.length - i];
      }
    }
    maxFront = Math.max(maxFront, front);
    maxBack = Math.max(maxBack, back);
  }
  return maxBack + maxFront;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  // 枚举前缀和后缀
  // 前缀为空：从右往左遍历，找到最短满足要求的后缀
  // 枚举前缀长度的同时维护后缀的长度
  const n = s.length;
  let j = n;
  const counts = new Array(3).fill(0);
  while (counts[0] < k || counts[1] < k || counts[2] < k) {
    // 全部找完都没有
    if (j == 0) {
      return -1;
    }
    j--;
    counts[s[j].charCodeAt() - "a".charCodeAt()]++;
  }
  let ans = n - j; // 只有后缀时的情况
  for (let i = 0; i < n; i++) {
    counts[s[i].charCodeAt() - "a".charCodeAt()]++;
    // 可以去掉s[j]
    while (j < n && counts[s[j].charCodeAt() - "a".charCodeAt()] > k) {
      counts[s[j].charCodeAt() - "a".charCodeAt()]--;
      j++;
    }
    // 找到一个答案
    ans = Math.min(ans, i + 1 + n - j);
    // j等于n时可以提前退出
    if (j === n) break;
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-08 10:47:58                                                  *
 * @LastModifiedDate: 2023-10-08 11:29:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的二进制字符串 s1 和 s2 ，两个字符串的长度都是 n ，再给你一个正整数 x 。

// 你可以对字符串 s1 执行以下操作 任意次 ：

// 选择两个下标 i 和 j ，将 s1[i] 和 s1[j] 都反转，操作的代价为 x 。
// 选择满足 i < n - 1 的下标 i ，反转 s1[i] 和 s1[i + 1] ，操作的代价为 1 。
// 请你返回使字符串 s1 和 s2 相等的 最小 操作代价之和，如果无法让二者相等，返回 -1 。

// 注意 ，反转字符的意思是将 0 变成 1 ，或者 1 变成 0 。

/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
var minOperations = function (s1, s2, x) {
  // 如果不同的地方数量为奇数，则无法通过翻转得到相同字符
  let diffs = [];
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diffs.push(i);
    }
  }
  if (diffs.length === 0) return 0;
  if (diffs.length % 2 === 1) return -1;
  // diffs[i+1] - diffs[i] 是要进行操作2的次数
  // 动态规划
  const dp = new Array(diffs.length).fill(0);
  dp[0] = [0, 0]; // [connectWithFront, not]
  
};

// 10110
// 00011

// 不同的地方：110
//             001

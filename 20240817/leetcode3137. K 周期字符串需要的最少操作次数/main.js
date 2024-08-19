/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-17 23:06:50                                                  *
 * @LastModifiedDate: 2024-08-17 23:13:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的字符串 word 和一个整数 k ，其中 k 是 n 的因数。

// 在一次操作中，你可以选择任意两个下标 i 和 j，其中 0 <= i, j < n ，且这两个下标都可以被 k 整除，然后用从 j 开始的长度为 k 的子串替换从 i 开始的长度为 k 的子串。也就是说，将子串 word[i..i + k - 1] 替换为子串 word[j..j + k - 1] 。

// 返回使 word 成为 K 周期字符串 所需的 最少 操作次数。

// 如果存在某个长度为 k 的字符串 s，使得 word 可以表示为任意次数连接 s ，则称字符串 word 是 K 周期字符串 。例如，如果 word == "ababab"，那么 word 就是 s = "ab" 时的 2 周期字符串 。

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function (word, k) {
  const n = word.length;
  const hash = new Map();
  let max = 0;
  for (let i = 0; i < n / k; i++) {
    const str = word.substring(i * k, (i + 1) * k);
    hash.set(str, (hash.get(str) || 0) + 1);
    max = Math.max(max, hash.get(str));
  }
  return n / k - max;
};

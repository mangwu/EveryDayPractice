/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-14 22:47:04                                                  *
 * @LastModifiedDate: 2023-10-14 23:17:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 和一个下标从 0 开始的字符串数组 words ，和一个下标从 0 开始的 二进制 数组 groups ，两个数组长度都是 n 。

// 两个长度相等字符串的 汉明距离 定义为对应位置字符 不同 的数目。

// 你需要从下标 [0, 1, ..., n - 1] 中选出一个 最长子序列 ，将这个子序列记作长度为 k 的 [i0, i1, ..., ik - 1] ，它需要满足以下条件：

// 相邻 下标对应的 groups 值 不同。即，对于所有满足 0 < j + 1 < k 的 j 都有 groups[ij] != groups[ij + 1] 。
// 对于所有 0 < j + 1 < k 的下标 j ，都满足 words[ij] 和 words[ij + 1] 的长度 相等 ，且两个字符串之间的 汉明距离 为 1 。
// 请你返回一个字符串数组，它是下标子序列 依次 对应 words 数组中的字符串连接形成的字符串数组。如果有多个答案，返回任意一个。

// 子序列 指的是从原数组中删掉一些（也可能一个也不删掉）元素，剩余元素不改变相对位置得到的新的数组。

// 注意：words 中的字符串长度可能 不相等 。

/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (n, words, groups) {
  const dp = new Array(n).fill(-1);
  dp[0] = [words[0]];
  let ans = dp[0];
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let curDp = [words[i]];
    while (j >= 0) {
      if (j + 1 < curDp.length) break;
      if (
        getHanminDis(words[i], words[j]) === 1 &&
        groups[i] !== groups[j] &&
        dp[j].length + 1 > curDp.length
      ) {
        curDp = dp[j].slice();
        curDp.push(words[i]);
      }
      j--;
    }
    dp[i] = curDp;
    if (ans.length < dp[i].length) ans = dp[i];
  }
  return ans;
};

function getHanminDis(word1, word2) {
  if (word1.length !== word2.length) return Infinity;
  let diff = 0;
  for (let i = 0; i < word1.length; i++) if (word1[i] !== word2[i]) diff++;
  return diff;
}

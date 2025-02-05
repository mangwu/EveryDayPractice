/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-05 17:07:20                                                  *
 * @LastModifiedDate: 2025-02-05 17:34:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 暴力解法，遍历s，通过递归判断所有构成s的子字符串是否能满足情况
  const set = new Set(wordDict);
  const dfs = (str) => {
    if (set.has(str)) return true;
    let res = false;
    const m = str.length;
    for (let i = m - 1; i > 0; i--) {
      if (set.has(str.substring(0, i))) {
        res = res || dfs(str.substring(i));
        if (res) return res;
      }
    }
    return false;
  };
  return dfs(s);
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const trie = {};
  for (const word of wordDict) {
    let node = trie;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  const search = (start, end) => {
    let node = trie;
    while (start <= end) {
      if (!node[s[start]]) return false;
      node = node[s[start++]];
    }
    return Boolean(node.isEnd);
  };
  const n = s.length;
  const dp = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      if (j > 0) {
        dp[i] = search(j, i) && dp[j - 1];
      } else {
        dp[i] = search(j, i);
      }
      if (dp[i]) break; // 已经搜索到，不用继续搜索
    }
  }
  return dp[n - 1];
};

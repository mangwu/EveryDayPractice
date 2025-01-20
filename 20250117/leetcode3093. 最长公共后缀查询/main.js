/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-17 17:19:41                                                  *
 * @LastModifiedDate: 2025-01-20 11:24:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串数组 wordsContainer 和 wordsQuery 。

// 对于每个 wordsQuery[i] ，你需要从 wordsContainer 中找到一个与 wordsQuery[i] 有 最长公共后缀 的字符串。如果 wordsContainer 中有两个或者更多字符串有最长公共后缀，那么答案为长度 最短 的。如果有超过两个字符串有 相同 最短长度，那么答案为它们在 wordsContainer 中出现 更早 的一个。

// 请你返回一个整数数组 ans ，其中 ans[i]是 wordsContainer中与 wordsQuery[i] 有 最长公共后缀 字符串的下标。

/**
 * @description 插入字典树
 * @param {Object} node
 * @param {string} word
 * @param {number} index
 * @returns {void}
 */
function insert(node, word, index) {
  const n = word.length;
  if (node.len > n) {
    node.len = n;
    node.index = index;
  }
  for (let i = n - 1; i >= 0; i--) {
    if (!node[word[i]]) {
      node[word[i]] = {
        len: n,
        index: index,
      };
    }
    node = node[word[i]];
    if (node.len > n) {
      node.len = n;
      node.index = index;
    }
  }
}

/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
  const trie = { len: Infinity, index: -1 };
  const n = wordsContainer.length;
  for (let i = 0; i < n; i++) insert(trie, wordsContainer[i], i);
  const res = [];
  for (const query of wordsQuery) {
    const m = query.length;
    let node = trie;
    for (let i = m - 1; i >= 0; i--) {
      if (!node[query[i]]) break;
      node = node[query[i]];
    }
    res.push(node.index);
  }
  return res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-08 21:50:17                                                  *
 * @LastModifiedDate: 2025-01-08 22:42:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：

// words.length == indices.length
// 助记字符串 s 以 '#' 字符结尾
// 对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等
// 给你一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

class Trie {
  constructor() {
    this.children = {};
  }
  insert(word) {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  #find(word) {
    let node = this.children;
    for (const ch of word) {
      if (!node[ch]) return 0;
      node = node[ch];
    }
    return node.isEnd ? 2 : 1;
  }
  startsWith(prefix) {
    return this.#find(prefix) !== 0;
  }
}

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  // word最长为7 ，可以先把长的字符串存入字典树中，后续的字符串可以进行查找，找到了就不用增加
  words = words
    .sort((a, b) => b.length - a.length)
    .map((v) => v.split("").reverse().join(""));
  let res = 0;
  const trie = new Trie();
  for (const word of words) {
    if (!trie.startsWith(word)) {
      res += word.length + 1;
      trie.insert(word);
    }
  }
  return res;
};

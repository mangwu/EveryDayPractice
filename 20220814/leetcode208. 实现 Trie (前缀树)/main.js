/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 21:09:50                                                  *
 * @LastModifiedDate: 2022-08-14 21:39:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。
// 这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，
// 返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，
// 返回 true ；否则，返回 false 。

var Trie = function () {
  this.hash = new Set();
  this.words = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  for (let i = 1; i < word.length; i++) {
    this.hash.add(word.substring(0, i));
  }
  this.words.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.words.has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.words.has(prefix) || this.hash.has(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

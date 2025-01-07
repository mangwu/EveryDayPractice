/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-07 22:45:51                                                  *
 * @LastModifiedDate: 2025-01-07 23:45:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

// 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

// 请注意，单词应该从左到右构建，每个额外的字符都添加到前一个单词的结尾。

class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      const idx = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[idx] === null) node.children[idx] = new Trie();
      node = node.children[idx];
    }
    node.isEnd = true;
  }
}

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const trie = new Trie();
  for (const word of words) trie.insert(word);
  let res = [];
  let str = "";
  const dfs = (node) => {
    if (!node) return;
    const children = node.children;
    if (str.length < res.length) str = res.join("");
    for (let i = 0; i < 26; i++) {
      if (children[i] !== null && children[i].isEnd) {
        const ch = String.fromCharCode("a".charCodeAt() + i);
        res.push(ch);
        dfs(children[i]);
        res.pop();
      }
    }
  };
  dfs(trie);
  return str;
};

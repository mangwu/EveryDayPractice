/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-07 21:06:27                                                  *
 * @LastModifiedDate: 2025-01-07 21:42:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在英语中，我们有一个叫做 词根(root) 的概念，可以词根 后面 添加其他一些词组成另一个较长的单词——我们称这个词为 衍生词 (derivative)。例如，词根 help，跟随着 继承词 "ful"，可以形成新的单词 "helpful"。

// 现在，给定一个由许多 词根 组成的词典 dictionary 和一个用空格分隔单词形成的句子 sentence。你需要将句子中的所有 衍生词 用 词根 替换掉。如果 衍生词 有许多可以形成它的 词根，则用 最短 的 词根 替换它。

// 你需要输出替换之后的句子。
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
  getShortestPrefix(word) {
    let node = this.children;
    const res = [];
    for (const ch of word) {
      res.push(ch);
      if (!node[ch]) return word;
      if (node[ch] && node[ch].isEnd) break;
      node = node[ch];
    }
    return res.join("");
  }
}
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();
  for (const dic of dictionary) trie.insert(dic);
  return sentence
    .split(" ")
    .map((word) => trie.getShortestPrefix(word))
    .join(" ");
};

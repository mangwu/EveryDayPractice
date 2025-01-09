/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-08 19:51:38                                                  *
 * @LastModifiedDate: 2025-01-08 21:49:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你是一位系统管理员，手里有一份文件夹列表 folder，你的任务是要删除该列表中的所有 子文件夹，并以 任意顺序 返回剩下的文件夹。

// 如果文件夹 folder[i] 位于另一个文件夹 folder[j] 下，那么 folder[i] 就是 folder[j] 的 子文件夹 。folder[j] 的子文件夹必须以 folder[j] 开头，后跟一个 "/"。例如，"/a/b" 是 "/a" 的一个子文件夹，但 "/b" 不是 "/a/b/c" 的一个子文件夹。

// 文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：'/' 后跟一个或者多个小写英文字母。

// 例如，"/leetcode" 和 "/leetcode/problems" 都是有效的路径，而空字符串和 "/" 不是。

class Trie {
  constructor() {
    this.chilren = {};
  }
  insert(words) {
    let node = this.chilren;
    let hasFather = false;
    for (const word of words) {
      if (!node[word]) node[word] = {};
      node = node[word];
      if (node.isEnd) hasFather = true;
    }
    node.isEnd = true;
    return hasFather;
  }
}

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort((a, b) => a.length - b.length);
  const trie = new Trie();
  const res = [];
  for (const str of folder) {
    if (!trie.insert(str.slice(1).split("/"))) res.push(str);
  }
  return res;
};

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  // 直接按照字典序排序，第一个一定是父文件夹
  // 判断上一个父亲文件夹是否是当前文件夹的父文件夹
  folder.sort();
  const res = [folder[0]];
  const n = folder.length;
  for (let i = 1; i < n; i++) {
    const pre = res[res.length - 1];
    if (!(folder[i].startsWith(pre) && folder[i][pre.length] === "/"))
      res.push(folder[i]);
  }
  return res;
};

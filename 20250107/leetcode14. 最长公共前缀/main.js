// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

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
  search(word) {
    return this.#find(word) === 2;
  }
  startsWith(prefix) {
    return this.#find(prefix) !== 0;
  }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const trie = new Trie();
  trie.insert(strs[0]);
  const n = strs.length;
  let res = strs[0];
  for (let i = 1; i < n; i++) {
    const m = strs[i].length;
    let curRes = "";
    for (let j = 1; j <= m; j++) {
      const curStr = strs[i].slice(0, j);
      if (trie.startsWith(curStr)) {
        curRes = curStr;
      } else break;
    }
    if (curRes.length < res.length) {
      res = curRes;
    }
  }
  return res;
};

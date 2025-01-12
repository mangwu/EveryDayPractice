// 设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。

// 实现 MagicDictionary 类：

// MagicDictionary() 初始化对象
// void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
// bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。

class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
  }
  insert(word) {
    let node = this;
    for (const ch of word) {
      const code = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[code]) node.children[code] = new Trie();
      node = node.children[code];
    }
    node.isEnd = true;
  }
}

var MagicDictionary = function () {
  this.trie = new Trie();
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const word of dictionary) {
    this.trie.insert(word);
  }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  let node = this.trie;
  const n = searchWord.length;
  const dfs = (i, node, hasChange = false) => {
    if (i === n) return Boolean(hasChange && node && node.isEnd);
    if (!node) return false;
    let code = searchWord[i].charCodeAt() - "a".charCodeAt();
    if (hasChange) return dfs(i + 1, node.children[code], node, hasChange);
    let res = false;
    for (let j = 0; j < 26; j++) {
      res = res || dfs(i + 1, node.children[j], j !== code);
      if (res) return true;
    }
    return res;
  };
  return dfs(0, node, false);
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

// 设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于已构建的神奇字典中。

// 实现 MagicDictionary 类：

// MagicDictionary() 初始化对象
// void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
// bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.trie = {};
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const word of dictionary) {
    let node = this.trie;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node["isEnd"] = true;
  }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  let res = false;
  const dfs = (i, word, node, flag) => {
    if (res) return; // 找到了就提前结束
    if (!node) return;
    if (i === word.length) {
      res = Boolean(node && node.isEnd && flag);
      return;
    }
    const ch = word[i];
    const keys = Object.keys(node);
    for (const key of keys) {
      if (key === ch) {
        // 相同字符
        dfs(i + 1, word, node[key], flag);
      } else if (key.length === 1 && !flag) {
        // 不同字符，且之前没有修改过
        dfs(i + 1, word, node[key], true);
      }
    }
  };
  dfs(0, searchWord, this.trie, false);
  return res;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

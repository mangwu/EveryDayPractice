// 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

// 实现词典类 WordDictionary ：

// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。

var WordDictionary = function () {
  this.children = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.children;
  for (const ch of word) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const n = word.length;
  const dfs = (i, node) => {
    const ch = word[i];
    if (i === n - 1) {
      if (!node) return false;
      if (ch !== ".") {
        if (node[ch] && node[ch].isEnd) return true;
        return false;
      } else {
        const keys = Object.keys(node);
        for (const key of keys) {
          if (key !== "isEnd" && node[key].isEnd) return true;
        }
        return false;
      }
    }
    if (ch !== ".") {
      if (node[ch]) return dfs(i + 1, node[ch]);
      return false;
    } else {
      const keys = Object.keys(node);
      let res = false;
      for (const key of keys) {
        if (key !== "isEnd") res = res || dfs(i + 1, node[key]);
      }
      return res;
    }
  };
  return dfs(0, this.children);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

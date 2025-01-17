// 设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

// 实现 WordFilter 类：

// WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
// f(string pref, string suff) 返回词典中具有前缀 pref 和后缀 suff 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。

/**
 *
 * @param {Object} node
 * @param {string} word
 * @param {number} idx
 */
function insert(node, word, idx) {
  for (const ch of word) {
    if (!node[ch]) node[ch] = { indexArr: [] };
    node = node[ch];
    node.indexArr.push(idx);
  }
}

/**
 * @description
 * @param {Object} node
 * @param {string} word
 * @returns {Set|null}
 */
function search(node, word) {
  for (const ch of word) {
    if (!node[ch]) return null;
    node = node[ch];
  }
  return node.indexArr;
}

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  const n = words.length;
  const trie1 = {};
  const trie2 = {};
  for (let i = n - 1; i >= 0; i--) {
    insert(trie1, words[i], i);
    insert(trie2, words[i].split("").reverse().join(""), i);
  }
  this.prefTrie = trie1;
  this.suffTrie = trie2;
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  const prefArr = search(this.prefTrie, pref);
  const suffArr = search(this.suffTrie, suff.split("").reverse().join(""));
  if (prefArr && suffArr) {
    const prefLen = prefArr.length;
    const suffLen = suffArr.length;
    let preIdx = 0;
    let sufIdx = 0;
    while (preIdx < prefLen && sufIdx < suffLen) {
      if (prefArr[preIdx] === suffArr[sufIdx]) return suffArr[sufIdx];
      else if (prefArr[preIdx] > suffArr[sufIdx]) preIdx++;
      else sufIdx++;
    }
  }
  return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

/**
 *
 * @param {Object} node
 * @param {string} word
 * @param {number} idx
 */
function insert(node, word, idx) {
  for (const ch of word) {
    if (!node[ch]) node[ch] = { index: idx };
    node[ch].index = idx;
    node = node[ch];
  }
  node.index = idx;
}

/**
 * @description
 * @param {Object} node
 * @param {string} word
 * @returns {Set|null}
 */
function search(node, word) {
  for (const ch of word) {
    if (!node[ch]) return null;
    node = node[ch];
  }
  return node.index;
}

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  const n = words.length;
  const trie = {};
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const m = word.length;
    for (let k = 1; k <= m; k++) {
      const curWord = word.substring(m - k, m) + "#" + word;
      insert(trie, curWord, i);
    }
  }
  this.trie = trie;
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  const idx = search(this.trie, suff + "#" + pref);
  return idx == null ? -1 : idx;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

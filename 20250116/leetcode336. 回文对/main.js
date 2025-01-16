// 给定一个由唯一字符串构成的 0 索引 数组 words 。

// 回文对 是一对整数 (i, j) ，满足以下条件：

// 0 <= i, j < words.length，
// i != j ，并且
// words[i] + words[j]（两个字符串的连接）是一个
// 回文串
// 。
// 返回一个数组，它包含 words 中所有满足 回文对 条件的字符串。

// 你必须设计一个时间复杂度为 O(sum of words[i].length) 的算法。

/**
 * @description 判断字符串的一部分是否是回文字符串
 * @param {string} str
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

class Trie {
  constructor() {
    this.children = new Array(26).fill(null);
    this.index = -1; // 记录字符串在words中的索引，只在字符串结尾节点存储，默认-1表示不是结尾节点
  }
}
let root = new Trie();
/**
 * @description 字典树插入字符串
 * @param {string} word
 * @param {number} idx
 * @returns {void}
 */
function insert(word, idx) {
  let node = root;
  for (const ch of word) {
    const code = ch.charCodeAt() - "a".charCodeAt();
    if (node.children[code] === null) node.children[code] = new Trie();
    node = node.children[code];
  }
  node.index = idx;
}

/**
 * @description 搜索字符串指定子字符串的是否存在于字典树中，这里是倒叙搜索word
 * @param {string} word
 * @param {number} start
 * @param {number} end
 * @returns {number} index 搜索到的index
 */
function search(word, start, end) {
  let node = root;
  for (let i = end; i >= start; i--) {
    const code = word[i].charCodeAt() - "a".charCodeAt();
    if (node.children[code] === null) return -1; // 搜索不到
    node = node.children[code];
  }
  return node.index;
}
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const n = words.length;
  for (let i = 0; i < n; i++) {
    insert(words[i], i); // 正序插入到字典树中
  }
  const res = [];
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const m = word.length;
    for (let j = 0; j <= m; j++) {
      // word的右边是回文字符串（包括空字符串），查找能匹配左边的字符串的翻转字符串
      // aabc => "aabc" "abc" "bc" "c"   ""
      // 搜索 => ""     "a"   "aa" "aab" "aabc"

      if (isPalindrome(word, j, m - 1)) {
        const idx = search(word, 0, j - 1);
        if (idx !== -1 && idx !== i) {
          res.push([i, idx]);
        }
      }
      // word的左边是回文字符串，查找能匹配右边的字符串的翻转字符串
      // aabc => "aabc" "aab" "aa"   "a"
      // 搜索 => ""     "c"   "bc"   "abc"
      if (j !== 0 && isPalindrome(word, 0, j - 1)) {
        const idx = search(word, j, m - 1);
        if (idx !== -1 && idx !== i) {
          res.push([idx, i]);
        }
      }
    }
  }
  root = new Trie();
  return res;
};

// [[3,0],[1,3],[4,0],[2,4],[5,0],[0,5]]
palindromePairs(["aabc"]);

// 给定一个由唯一字符串构成的 0 索引 数组 words 。

// 回文对 是一对整数 (i, j) ，满足以下条件：

// 0 <= i, j < words.length，
// i != j ，并且
// words[i] + words[j]（两个字符串的连接）是一个
// 回文串
// 。
// 返回一个数组，它包含 words 中所有满足 回文对 条件的字符串。

// 你必须设计一个时间复杂度为 O(sum of words[i].length) 的算法。

function isPalindrome(str) {
  const n = str.length;
  const half = Math.floor(n / 2);
  for (let i = 0; i < half; i++) {
    if (str[i] !== str[n - i - 1]) return false;
  }
  return true;
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  // 暴力法尝试
  const n = words.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPalindrome(words[i] + words[j])) res.push([i, j]);
      if (isPalindrome(words[j] + words[i])) res.push([j, i]);
    }
  }
  return res;
};

// sssll
// 求出字符串的所有可以组合成回文串的字符串
//=> llsss, llss, lls
//=> llsss, lsss, sss

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  // 暴力法尝试
  const n = words.length;
  const res = [];
  // 两个字符串str1，str2要构成回文串，只有下面两种情况
  // 1. str1由两个子串str1_1和str1_2构成，其中str1_2本身是回文字符串，而str1_1和str2互为翻转字符串
  // 2. str2由两个子串str2_1和str2_2构成，其中str2_2本身是回文字符串，而str2_1和str1互为翻转字符串
  // 我们可以把所有word翻转后存入hash表中记录索引
  // 然后遍历words，把word当作存在回文子字符串(空字符串也行)的字符串，然后拆分word,查找hash中是否存在str2_1/str1_1的翻转字符串
  // 需要注意的是：对于空字符串而言，它没有所谓的翻转字符串，但是它能和任何回文字符串组合所以需要特殊判断
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(words[i].split("").reverse().join(""), i);
  }
  for (let i = 0; i < n; i++) {
    const word = words[i];
    if (hash.has("") && isPalindrome(word) && word !== "") {
      res.push([hash.get(""), i]);
    }
    for (let j = 0; j < word.length; j++) {
      const left = word.substring(0, j);
      const right = word.substring(j);
      if (isPalindrome(left) && hash.has(right) && hash.get(right) !== i) {
        res.push([hash.get(right), i]);
      }
      if (isPalindrome(right) && hash.has(left) && hash.get(left) !== i) {
        res.push([i, hash.get(left)]);
      }
    }
  }
  return res;
};

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  // 双前缀树，使用一个前缀树保存word，另一个前缀树保存翻转的word
  const n = words.length;
  const res = [];
  const trie1 = {};
  const trie2 = {};
  for (let i = 0; i < n; i++) {
    // 插入树中
    let node1 = trie1;
    let node2 = trie2;
    const word = words[i];
    const m = word.length;
    for (let j = 0; j < m; j++) {
      const ch1 = word[j];
      const ch2 = word[m - j - 1];
      !node1[ch1] && (node1[ch1] = {});
      !node2[ch2] && (node2[ch2] = {});
      node1 = node1[ch1];
      node2 = node2[ch2];
    }
    // 记录索引，空字符串的也会记录进去
    node1.idx = i;
    node2.idx = i;
  }
  console.log(trie1);
  console.log(trie2);
  const dfs = (trie, path, res) => {
    if (trie.idx !== undefined && isPalindrome(path)) {
      res.push(trie.idx);
    }
    const keys = Object.keys(trie);
    for (const key of keys) {
      if (key.length === 1) {
        path.push(key);
        dfs(trie[key], path, res);
        path.pop(key);
      }
    }
  };
  const commonDfs = (trie1, trie2) => {
    const path = [];
    const curRes = [];
    dfs(trie2, path, curRes);
    for (const item of curRes) {
      res.push([trie1.idx, item]);
    }
  };
  const dfsFindRes = (trie1, trie2) => {
    if (!trie1 || !trie2) return;
    if (trie1.idx !== undefined && trie2.idx !== undefined) {
      if (trie1.idx !== trie2.idx) res.push([trie1.idx, trie2.idx]);
      else {
        commonDfs(trie1, trie2);
        commonDfs(trie2, trie1);
      }
    } else if (trie1.idx !== undefined) {
      // 找出trie2中所有的中间回文字符串
      commonDfs(trie1, trie2);
    } else if (trie2.idx !== undefined) {
      // 找出trie1中所有的中间回文字符串
      commonDfs(trie2, trie1);
    }
    const keys = Object.keys(trie1);
    for (const key of keys) {
      if (key.length === 1) dfsFindRes(trie1[key], trie2[key]);
    }
  };
  dfsFindRes(trie1, trie2);
  return res;
};

// abdd ba
// abdd ab ba
// abdd + ba === ab + ddba

// abccllc cba

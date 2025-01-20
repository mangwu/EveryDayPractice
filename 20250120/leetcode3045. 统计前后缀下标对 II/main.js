// 给你一个下标从 0 开始的字符串数组 words 。

// 定义一个 布尔 函数 isPrefixAndSuffix ，它接受两个字符串参数 str1 和 str2 ：

// 当 str1 同时是 str2 的前缀（
// prefix
// ）和后缀（
// suffix
// ）时，isPrefixAndSuffix(str1, str2) 返回 true，否则返回 false。
// 例如，isPrefixAndSuffix("aba", "ababa") 返回 true，因为 "aba" 既是 "ababa" 的前缀，也是 "ababa" 的后缀，但是 isPrefixAndSuffix("abc", "abcd") 返回 false。

// 以整数形式，返回满足 i < j 且 isPrefixAndSuffix(words[i], words[j]) 为 true 的下标对 (i, j) 的 数量 。

function insert(node, word, start, end, idx) {
  let hasAdd = false;
  while (start <= end) {
    if (!node[word[start]]) node[word[start]] = { index: [] };
    node = node[word[start]];
    node.index.push(idx);
    start++;
    hasAdd = true;
  }
  while (!hasAdd && start >= end) {
    if (!node[word[start]]) node[word[start]] = { index: [] };
    node = node[word[start]];
    node.index.push(idx);
    start--;
  }
}

function searchPref(node, word, idx) {
  for (const ch of word) {
    if (!node[ch]) return [];
    node = node[ch];
    const arr = node.index;
    while (arr.length && arr[arr.length - 1] <= idx) {
      arr.pop();
    }
  }
  const arr = node.index;
  while (arr.length && arr[arr.length - 1] <= idx) {
    arr.pop();
  }
  return arr;
}

function searchSuff(node, word, idx) {
  const n = word.length;
  for (let i = n - 1; i >= 0; i--) {
    const ch = word[i];
    if (!node[ch]) return [];
    node = node[ch];
    const arr = node.index;
    while (arr.length && arr[arr.length - 1] <= idx) {
      arr.pop();
    }
  }
  const arr = node.index;
  while (arr.length && arr[arr.length - 1] <= idx) {
    arr.pop();
  }
  return arr;
}
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  const prefTrie = {};
  const suffTrie = {};
  const n = words.length;
  for (let i = n - 1; i >= 0; i--) {
    insert(prefTrie, words[i], 0, words[i].length - 1, i);
    insert(suffTrie, words[i], words[i].length - 1, 0, i);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    const prefArr = searchPref(prefTrie, words[i], i);
    const suffArr = searchSuff(suffTrie, words[i], i);
    let curRes = 0;
    let prefIdx = 0;
    let suffIdx = 0;
    while (prefArr.length > prefIdx && suffIdx < suffArr.length) {
      if (prefArr[prefIdx] === suffArr[suffIdx]) {
        res++;
        prefIdx++;
        suffIdx++;
      } else if (prefArr[prefIdx] > suffArr[suffIdx]) {
        prefIdx++;
      } else {
        suffIdx++;
      }
    }
    res += curRes;
  }
  console.log(res);
  return res;
};

// aba    ababa

// aba的pair列表：
// [aa, bb, aa]
// ababa的pair列表
// [aa, bb, aa, bb, aa]

// abc abcbabc
// abc的pair列表
// [ac, bb, ca]
// abcbabc的pair列表
// [ac, bb, ca, bb, ac, bb, ca]

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  const trie = {};
  let res = 0;
  // 字典树记录pair列表和以pair列表结束的cnt的个数
  for (const word of words) {
    let node = trie;
    const m = word.length;
    for (let i = 0; i < m; i++) {
      const ch = word[i] + word[m - i - 1];
      if (!node[ch]) node[ch] = { cnt: 0 };
      node = node[ch];
      res += node.cnt;
    }
    node.cnt++;
  }
  return res;
};

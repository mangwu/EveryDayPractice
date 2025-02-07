// 给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序 返回所有这些可能的句子。

// 注意：词典中的同一个单词可能在分段中被重复使用多次。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const set = new Set(wordDict);
  const dp = new Array(n).fill(0).map(() => new Array(0).fill(0));
  // dp[i]表示字符串s.slice(0, i + 1)能构建的句子
  for (let i = 0; i < n; i++) {
    for (let j = i; j >= 0; j--) {
      const subStr = s.substring(j, i + 1);
      if (set.has(subStr)) {
        // 通过dp[i-1]和subStr构造新句子
        if (j > 0) {
          for (const item of dp[j - 1]) {
            const newItem = item.slice();
            newItem.push(subStr);
            dp[i].push(newItem);
          }
        } else {
          dp[i].push([subStr]);
        }
      }
    }
  }
  return dp[n - 1].map((item) => item.join(" "));
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  // 暴力回溯法
  const set = new Set(wordDict);
  const n = s.length;
  const dfs = (i) => {
    if (i === -1) return [];
    // 返回[0, i]字符串能使用wordDict中能构造的所有子串
    const res = [];
    for (let j = i; j >= 0; j--) {
      const subStr = s.substring(j, i + 1);
      if (set.has(subStr)) {
        if (j > 0) {
          const pre = dfs(j - 1);
          for (const item of pre) {
            res.push(item + " " + subStr);
          }
        } else {
          res.push(subStr);
        }
      }
    }
    return res;
  };
  return dfs(n - 1);
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  // 记忆化搜索
  const set = new Set(wordDict);
  const n = s.length;
  const memo = new Array(n).fill(-1);
  const dfs = (i) => {
    if (i === n) return [];
    // 返回[i, n-1]字符串能使用wordDict中能构造的所有子串
    const res = [];
    if (memo[i] !== -1) return memo[i];
    for (let j = i; j < n; j++) {
      // [0, j]
      const subStr = s.substring(i, j + 1);
      if (set.has(subStr)) {
        if (j < n - 1) {
          const pre = dfs(j + 1);
          for (const item of pre) {
            res.push(subStr + " " + item);
          }
        } else {
          res.push(subStr);
        }
      }
    }
    memo[i] = res;
    return res;
  };
  dfs(0);
  return memo[0];
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  // 记忆化搜索 + 字典树
  const n = s.length;
  const memo = new Array(n).fill(-1);
  const trie = {};
  for (const word of wordDict) {
    let node = trie;
    for (const ch of word) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  const dfs = (i) => {
    if (i === n) return [];
    // 返回[i, n-1]字符串能使用wordDict中能构造的所有子串
    const res = [];
    if (memo[i] !== -1) return memo[i];
    let node = trie;
    let subStr = "";
    for (let j = i; j < n; j++) {
      // [0, j]
      const ch = s[j];
      if (node[ch]) {
        node = node[ch];
        subStr += ch;
      } else break;
      if (node.isEnd) {
        if (j < n - 1) {
          const pre = dfs(j + 1);
          for (const item of pre) {
            res.push(subStr + " " + item);
          }
        } else {
          res.push(subStr);
        }
      }
    }
    memo[i] = res;
    return res;
  };
  dfs(0);
  return memo[0];
};

wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]);

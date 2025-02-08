// 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

// 注意：本题相对原题稍作改动，只需返回未识别的字符数

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const n = sentence.length;
  if (n === 0) return 0;
  const set = new Set(dictionary);
  const dp = new Array(n).fill(-1);
  // dp[i]表示[0, i]字符串未识别字符的最少个数
  for (let i = 0; i < n; i++) {
    dp[i] = i + 1;
    for (let j = i; j >= 0; j--) {
      const subStr = sentence.substring(j, i + 1);
      if (set.has(subStr)) {
        if (j > 0) {
          dp[i] = Math.min(dp[i], dp[j - 1]);
        } else {
          dp[i] = 0; // 一个长字符串
          break;
        }
      } else {
        // 当前字符串是未识别字符串
        if (j > 0) dp[i] = Math.min(dp[i], dp[j - 1] + subStr.length);
      }
    }
  }
  return dp[n - 1];
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const n = sentence.length;
  if (n === 0) return 0;
  const set = new Set(dictionary);
  const dp = new Array(n).fill(-1);
  // dp[i]表示[i, n - 1]字符串未识别字符的最少个数
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = n - i;
    for (let j = i; j < n; j++) {
      const subStr = sentence.substring(i, j + 1);
      if (set.has(subStr)) {
        if (j < n - 1) {
          dp[i] = Math.min(dp[i], dp[j + 1]);
        } else {
          dp[i] = 0; // 一个长字符串
          break;
        }
      } else {
        // 当前字符串是未识别字符串
        if (j < n - 1) dp[i] = Math.min(dp[i], dp[j + 1] + subStr.length);
      }
    }
  }
  return dp[0];
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const n = sentence.length;
  if (n === 0) return 0;
  const dp = new Array(n).fill(-1);
  // 字典树实现
  const trie = {};
  for (const dic of dictionary) {
    let node = trie;
    for (const ch of dic) {
      if (!node[ch]) node[ch] = {};
      node = node[ch];
    }
    node.isEnd = true;
  }
  // dp[i]表示[i, n - 1]字符串未识别字符的最少个数
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = n - i;
    let node = trie;
    for (let j = i; j < n; j++) {
      const ch = sentence[j];
      if (node[ch]) {
        node = node[ch];
        if (node.isEnd) {
          if (j < n - 1) {
            dp[i] = Math.min(dp[i], dp[j + 1]);
          } else {
            dp[i] = 0; // 一个长字符串
            break;
          }
        } else {
          if (j < n - 1) dp[i] = Math.min(dp[i], dp[j + 1] + j - i + 1);
        }
      } else break; // 可以提前退出
    }
  }
  return dp[0];
};

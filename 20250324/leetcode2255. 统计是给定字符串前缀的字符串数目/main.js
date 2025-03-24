// 给你一个字符串数组 words 和一个字符串 s ，其中 words[i] 和 s 只包含 小写英文字母 。

// 请你返回 words 中是字符串 s 前缀 的 字符串数目 。

// 一个字符串的 前缀 是出现在字符串开头的子字符串。子字符串 是一个字符串中的连续一段字符序列。

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    set.add(s.substring(0, i + 1));
  }
  let res = 0;
  for (const word of words) {
    if (set.has(word)) res++;
  }
  return res;
};

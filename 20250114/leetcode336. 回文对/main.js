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

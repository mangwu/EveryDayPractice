// 给你两个字符串 word1 和 word2 。

// 如果一个字符串 x 重新排列后，word2 是重排字符串的
// 前缀
//  ，那么我们称字符串 x 是 合法的 。

// 请你返回 word1 中 合法
// 子字符串
//  的数目。

// 注意 ，这个问题中的内存限制比其他题目要 小 ，所以你 必须 实现一个线性复杂度的解法。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  if (word1.length < word2.length) return 0;
  const diff = new Array(26).fill(0);
  for (const ch of word2) diff[ch.charCodeAt() - "a".charCodeAt()]--;
  let res = 0;
  let j = 0;
  const n = word1.length;
  for (let i = 0; i < n; i++) {
    while (j < n && diff.some((val) => val < 0)) {
      diff[word1[j].charCodeAt() - "a".charCodeAt()]++;
      j++;
    }
    if (diff.every((val) => val >= 0)) res += n - j + 1;
    else break;
    diff[word1[i].charCodeAt() - "a".charCodeAt()]--;
  }
  return res;
};

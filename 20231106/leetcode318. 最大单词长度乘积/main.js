// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const wordSets = words.map((v) => new Set(v.split("")));
  const n = words.length;
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n; j++) {
      if (hasPublicCh(wordSets[i], wordSets[j])) continue;
      ans = Math.max(ans, words[i].length * words[j].length);
    }
  }
  return ans;
};

var hasPublicCh = function (wordSet1, wordSet2) {
  for (const ch of wordSet1) {
    if (wordSet2.has(ch)) return true;
  }
  return false;
};

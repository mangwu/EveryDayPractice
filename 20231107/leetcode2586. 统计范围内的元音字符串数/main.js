// 给你一个下标从 0 开始的字符串数组 words 和两个整数：left 和 right 。

// 如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串 ，其中元音字母是 'a'、'e'、'i'、'o'、'u' 。

// 返回 words[i] 是元音字符串的数目，其中 i 在闭区间 [left, right] 内。

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const set = new Set(["a", "e", "i", "u", "o"]);
  let ans = 0;
  for (let i = left; i <= right; i++) {
    const cur = words[i];
    if (set.has(cur[0]) && set.has(cur[cur.length - 1])) {
      ans++;
    }
  }
  return ans;
};

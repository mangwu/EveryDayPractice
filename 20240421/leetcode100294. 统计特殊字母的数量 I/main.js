// 给你一个字符串 word。如果 word 中同时存在某个字母的小写形式和大写形式，则称这个字母为 特殊字母 。

// 返回 word 中 特殊字母 的数量。

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const diff = Math.abs("A".charCodeAt() - "a".charCodeAt());
  const set = new Set();
  const n = word.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(word[i].charCodeAt() - word[j].charCodeAt()) === diff) {
        set.add(word[i].toLocaleLowerCase());
      }
    }
  }
  return set.size;
};

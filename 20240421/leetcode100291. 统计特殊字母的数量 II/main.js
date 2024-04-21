// 给你一个字符串 word。如果 word 中同时出现某个字母 c 的小写形式和大写形式，并且 每个 小写形式的 c 都出现在第一个大写形式的 c 之前，则称字母 c 是一个 特殊字母 。

// 返回 word 中 特殊字母 的数量。

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  // 记录前面的小写，遍历到大写时判断是否前面有对应的小写
  const set = new Set();
  const aCode = "a".charCodeAt();
  const ACode = "A".charCodeAt();
  const n = word.length;
  const lowChs = new Array(26).fill(0);
  const upChs = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    if (word[i].toLocaleLowerCase() === word[i]) {
      // 小写
      lowChs[word[i].charCodeAt() - aCode]++;
      // 出现在第一个大写word[i]之后的小写word[i]
      if (set.has(word[i])) set.delete(word[i]);
    } else {
      // 大写
      let code = word[i].charCodeAt() - ACode;
      if (upChs[code] === 0) {
        // 第一个大写的word[i]，且前面有对应的小写
        if (lowChs[code]) set.add(word[i].toLocaleLowerCase());
      }
      upChs[code]++;
    }
  }
  return set.size;
};

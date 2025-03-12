// 给你一个字符串 word 和一个 非负 整数 k。

// 返回 word 的 子字符串 中，每个元音字母（'a'、'e'、'i'、'o'、'u'）至少 出现一次，并且 恰好 包含 k 个辅音字母的子字符串的总数。

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const n = word.length;
  const hash = new Map(); // 保存元音
  let cnt = 0; // 辅音数量
  const set = new Set(["a", "e", "i", "o", "u"]);
  let right = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    while (right < n && cnt < k) {
      if (set.has(word[right])) {
        hash.set(word[right], (hash.get(word[right]) || 0) + 1);
      } else {
        cnt++;
      }
      right++;
    }

    // 保证元音种类为5种
    while (right < n && set.has(word[right]) && hash.size < 5) {
      hash.set(word[right], (hash.get(word[right]) || 0) + 1);
      right++;
    }
    if (cnt === k && hash.size === 5) {
      // 计算连续元音能到达的j索引
      let j = right;
      while (j < n && set.has(word[j])) j++;
      res += j - right + 1;
    }
    if (set.has(word[i])) {
      const num = hash.get(word[i]);
      hash.set(word[i], num - 1);
      if (num === 1) hash.delete(word[i]);
    } else cnt--;
  }
  return res;
};

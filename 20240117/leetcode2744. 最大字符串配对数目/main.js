// 给你一个下标从 0 开始的数组 words ，数组中包含 互不相同 的字符串。

// 如果字符串 words[i] 与字符串 words[j] 满足以下条件，我们称它们可以匹配：

// 字符串 words[i] 等于 words[j] 的反转字符串。
// 0 <= i < j < words.length
// 请你返回数组 words 中的 最大 匹配数目。

// 注意，每个字符串最多匹配一次。

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const n = words.length;
  const hasUse = new Array(n).fill(false);
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    if (hasUse[i]) continue;
    for (let j = i + 1; j < n; j++) {
      if (hasUse[j]) continue;
      if (words[i] === words[j].split("").reverse().join("")) {
        hasUse[i] = true;
        hasUse[j] = true;
        ans++;
        break;
      }
    }
  }
  return ans;
};

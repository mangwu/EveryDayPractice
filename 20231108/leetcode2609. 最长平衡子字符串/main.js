// 给你一个仅由 0 和 1 组成的二进制字符串 s 。

// 如果子字符串中 所有的 0 都在 1 之前 且其中 0 的数量等于 1 的数量，则认为 s 的这个子字符串是平衡子字符串。请注意，空子字符串也视作平衡子字符串。

// 返回  s 中最长的平衡子字符串长度。

// 子字符串是字符串中的一个连续字符序列。

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      // 遍历之后的0
      let j = i + 1;
      while (j < n && s[j] === "0") j++;
      let k = j;
      while (k < n && s[k] === "1") k++;
      ans = Math.max(ans, Math.min(j - i, k - j) * 2);
      i = k - 1;
    }
  }
  return ans;
};

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长
// 子串
//  的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 双指针
  const n = s.length;
  const set = new Set();
  let j = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (set.has(ch)) {
      while (s[j] !== ch) {
        set.delete(s[j++]);
      }
      j++;
    } else set.add(ch);
    ans = Math.max(i - j + 1, ans);
  }
  return ans;
};

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set(); // 滑动窗口
  let res = 0;
  const n = s.length;
  let left = 0;
  for (let i = 0; i < n; i++) {
    while (left < i && set.has(s[i])) {
      set.delete(s[left++]);
    }
    set.add(s[i]);
    res = Math.max(res, set.size);
  }
  return res;
};

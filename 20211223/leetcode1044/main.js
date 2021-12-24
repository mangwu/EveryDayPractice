// 给你一个字符串 s ，考虑其所有 重复子串 ：即，s 的连续子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。

// 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。

/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {
  // 1. 一种暴力解法方案如下
  // 2. 维护重复子串
  // 3. 遍历字符串，如果从i开始的字符串比ans长度大于1的子串在i+1之后的字符串中有子串存在就更新ans
  // 4. 要遍历每个字符，且再判断剩余字符是否包含大于ans一个长度的字符，用于更新，时间复杂度较高
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    while (s.slice(i + 1).includes(s.slice(i, i + ans.length + 1))) {
      ans = s.slice(i, i + ans.length + 1);
    }
  }
  return ans;
};
console.log(longestDupSubstring("banana"));

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 马拉车算法
  s = "#" + s.split("").join("#") + "#"; // 预处理 ，保证只用处理奇数的回文子字符串
  const n = s.length;
  let mid = 0; // 当前回文子串能达到的最右边界的中心索引
  let right = 0; // 当前回文子串能达到的最右边界索引
  let maxLen = 0; // 记录最长的回文子串的中心和臂长（包括中心字符本身）
  let maxLenMid = 0;
  // 保存每个以i为中心能扩展的最长回文子字符串的臂长，包括s[i]字符本身，所以最小为1
  const child = [];
  // 遍历字符串
  for (let i = 0; i < n; i++) {
    // 第i个字符是否在臂长内，如果在就可以省去一部分向右扩展的遍历
    // child[2 * mid - i]是s[i]的以mid为中心的左边镜像回文串中心的臂长
    // right - i 是当前能到达的已知最长臂长
    child[i] = i < right ? Math.min(child[2 * mid - i], right - i) : 1;
    // 进行扩展，从i+child[i]的臂长之外开始
    while (
      i - child[i] >= 0 &&
      i + child[i] < n &&
      s[i + child[i]] === s[i - child[i]]
    ) {
      child[i]++;
    }
    // 更新右边界
    if (right < child[i] + i) {
      mid = i;
      right = child[i] + i;
    }
    // 更新最长回文子串
    if (maxLen < child[i]) {
      maxLen = child[i];
      maxLenMid = i;
    }
  }
  const subStr = s.substring(maxLenMid - maxLen + 1, maxLenMid + maxLen);
  return subStr.split("#").join("");
};

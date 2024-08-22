// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号
// 子串
// 的长度。

// 三種解法
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 动态规划
  const n = s.length;
  const dp = new Array(n).fill(0);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === ")") {
      // 右括号有两种情况
      if (s[i - 1] === "(") {
        dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2;
      } else if (s[i - 1] === ")" && s[i - dp[i - 1] - 1] === "(") {
        dp[i] =
          (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0) + dp[i - 1] + 2;
      }
      ans = Math.max(ans, dp[i]);
    }
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 栈，使用右括号当做分界点
  const n = s.length;
  const stack = [-1]; // 最左边的分界点，包含最长有效括号使用s[0]做左边界的情况
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      // 只要当前字符是)就无条件出栈，
      // 因为前一个字符如果是(，那么构成匹配，栈中至少还有一个分割符(-1或s[peek] === ")")
      // 前一个字符不是(,那么就是)或者-1，就是分割符，出栈后必空，没有匹配
      stack.pop();
      if (!stack.length) {
        stack.push(i); // 新的分割符
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 记录左右括号的数量
  let ltrLeftParCnt = 0;
  let ltrRightParCnt = 0;
  let rtlLeftParCnt = 0;
  let rtlRightParCnt = 0;
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      ltrLeftParCnt++;
    } else {
      ltrRightParCnt++;
      if (ltrLeftParCnt === ltrRightParCnt)
        ans = Math.max(ltrLeftParCnt * 2, ans);
      else if (ltrRightParCnt > ltrLeftParCnt) {
        ltrLeftParCnt = 0;
        ltrRightParCnt = 0;
      }
    }
    if (s[n - i - 1] == ")") {
      rtlRightParCnt++;
    } else {
      rtlLeftParCnt++;
      if (rtlLeftParCnt === rtlRightParCnt)
        ans = Math.max(ans, rtlLeftParCnt * 2);
      else if (rtlLeftParCnt > rtlRightParCnt) {
        rtlLeftParCnt = 0;
        rtlRightParCnt = 0;
      }
    }
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-19 10:05:40                                                  *
 * @LastModifiedDate: 2024-02-19 17:26:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 栈，记录括号和索引，每次达成一次匹配时，
  // 记录匹配的两个括号的索引
  // 排序所有匹配的索引，然后进行相邻合并，比较找出最长连续匹配记录即可
  const stack = [];
  const n = s.length;
  const pairs = new Map([[")", "("]]);
  let ans = 0;
  const matchs = [];

  for (let i = 0; i < n; i++) {
    if (stack.length && stack[stack.length - 1][0] === pairs.get(s[i])) {
      // 匹配成功
      const [_bracket, preIdx] = stack.pop();
      matchs.push([preIdx, i]);
    } else {
      stack.push([s[i], i]);
    }
  }
  // 遍历matchs，合并连续匹配索引
  matchs.sort((a, b) => a[0] - b[0]);
  const m = matchs.length;
  for (let i = 0; i < m; i++) {
    // 从matchs[i]开始遍历
    let [start, end] = matchs[i];
    while (i + 1 < m) {
      // 检查下一个是相邻还是内嵌，还是隔离
      const [nxtStart, nxtEnd] = matchs[i + 1];
      if (end + 1 === nxtStart) {
        // 相邻
        end = nxtEnd;
        i++;
      } else if (end > nxtEnd) {
        i++; // 内嵌
      } else if (end + 1 < nxtStart) {
        break; // 隔离
      }
    }
    ans = Math.max(ans, end - start + 1);
  }
  return ans;
};

// (()())))(()(()

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 动态规划
  // 假设dp[i]是以s[i]为底的最长有效的括号字符串
  // 那么，答案就是max(dp[i]) i >= 0 && i < s.length
  // dp状态转移：
  // 如果s[i]是"("，那么dp[i] = 0，因为有效括号字符串不可能以"("为底
  // 如果s[i]是")"，那么需要考虑s[i-1]的值，再结合判断
  //   如果s[i-1]是"("，正好可以匹配，dp[i] = dp[i-2] + 2
  //   如果s[i-1]是")"，那么当前s[i]要和s[i - dp[i-1] - 1]进行比较匹配，
  //   匹配成功，则dp[i] = dp[i-1] + dp[i - dp[i-1] - 2] + 2
  //   匹配失败，就是0
  const n = s.length;
  const dp = new Array(n).fill(0);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === ")") {
      if (i > 0) {
        if (s[i - 1] === "(") {
          dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2;
        } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === "(") {
          dp[i] =
            dp[i - 1] +
            (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0) +
            2;
        }
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // 第一种方法是通过记录匹配的括号索引，最终统一合并处理连续的匹配
  // 可以通过一次遍历完成这种连续匹配的长度计算，
  // 只要保证栈顶元素是最后一个没有匹配的右括号的下标，这就是最长有效括号字符串的边界
  const n = s.length;
  // -1是初始边界
  const stack = [-1];
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      // 直接入栈
      stack.push(i);
    } else {
      // 出栈匹配
      stack.pop();
      if (stack.length) {
        // 匹配成功
        ans = Math.max(ans, i - stack[stack.length - 1]);
      } else {
        // 入栈最后一个没有匹配的右括号下标
        stack.push(i);
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
  // 关于最长的有效括号字符串lvp，它和其它vp的关系排列可能有以下几种情况
  //   )vp)lvp)vp)
  //   )vp)lvp)vp(
  //   )vp)lvp(vp(
  //   )vp(lvp(vp(
  //   (vp(lvp(vp(
  // 其中lvp和vp的位置可以互相更换，其中分割符(和)的数量至少一个，可以有相同的多个
  // 1.如果从左往右遍历，可以发现，
  //   在记录左括号和右括号数量的时候，右括号是明显的分割符，可以找到部分vp
  // 2.如果从右向左遍历，可以发现，
  //   在记录左括号和右括号数量的时候，左括号是明显的分割符，可以找到部分vp
  // 这两种情况找到的vp恰好互补是字符串中的所有能延展的有效括号vp
  // 左->右时，记录left和right括号的数量，
  //   当右括号数量大于左括号时，找到一个分割符号，都归0，
  //   相等时就找到了一个vp，和ans进行比较选择
  // 右->左时，记录left和right括号的数量，
  //   当左括号数量大于右括号时，找到一个分割符号，都归0，
  //   相等时就找到了一个vp，和ans进行比较选择
  const n = s.length;
  let lLeft = 0;
  let lRight = 0;
  let rLeft = 0;
  let rRight = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") lLeft++;
    else lRight++;
    if (s[n - i - 1] === "(") rLeft++;
    else rRight++;
    if (lLeft === lRight) ans = Math.max(ans, lLeft + lRight);
    else if (lRight > lLeft) {
      lRight = 0;
      lLeft = 0;
    }
    if (rLeft === rRight) ans = Math.max(ans, rLeft + rRight);
    else if (rLeft > rRight) {
      rLeft = 0;
      rRight = 0;
    }
  }
  return ans;
};

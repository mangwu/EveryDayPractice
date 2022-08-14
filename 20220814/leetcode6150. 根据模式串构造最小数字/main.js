/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 10:44:14                                                  *
 * @LastModifiedDate: 2022-08-14 11:28:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你下标从 0 开始、长度为 n 的字符串 pattern ，它包含两种字符，'I' 表示 上升 ，'D' 表示 下降 。

// 你需要构造一个下标从 0 开始长度为 n + 1 的字符串，且它要满足以下条件：

// num 包含数字 '1' 到 '9' ，其中每个数字 至多 使用一次。
// 如果 pattern[i] == 'I' ，那么 num[i] < num[i + 1] 。
// 如果 pattern[i] == 'D' ，那么 num[i] > num[i + 1] 。
// 请你返回满足上述条件字典序 最小 的字符串 num。

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let set = new Set(); // 用过的字符
  let ans = [0];
  set.add(0);
  let n = pattern.length;
  for (let i = 0; i < n; i++) {
    const ch = pattern[i];
    if (ch == "I") {
      // 上升
      let start = ans[i] + 1;
      while (set.has(start)) {
        start++;
      }
      ans.push(start);
      set.add(start);
    } else {
      // 下降
      let start = ans[i] - 1;
      while (set.has(start)) {
        start--;
      }
      ans.push(start);
      set.add(start);
    }
  }
  let min = Math.min.apply(ans);
  for (let i = 0; i <= n; i++) {
    ans[i] = ans[i] - min + 1;
  }
  return ans.join("");
};

// 1 2 3 2 3 2 1 0

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let n = pattern.length;
  const dp = new Array(n + 1).fill(0);
  let pre = 0;
  for (let i = n; i >= 1; i--) {
    if (pattern[i - 1] == "D") {
      dp[i] = pre;
      pre++;
    } else {
      // 遇到i
      dp[i] = pre;
      pre = 0;
    }
  }
  dp[0] = pre;
  let ans = [1 + dp[0]];
  let max = 1 + dp[0];
  for (let i = 0; i < n; i++) {
    if (pattern[i] == "I") {
      // 增长
      ans.push(max + 1 + dp[i + 1]);
      max = max + 1 + dp[i + 1];
    } else {
      // 减少
      ans.push(ans[i] - 1);
    }
  }
  return ans.join("");
};

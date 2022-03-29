/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 10:01:08                                                  *
 * @LastModifiedDate: 2022-03-29 13:55:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。
// 老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。

// 给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，
// 表示你能进行以下操作的最多次数：

// 每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
// 请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // 滑动窗口解法
  const len = answerKey.length;
  let win = [];
  let left = 0;
  let right = 0;
  let ans = 0;
  // 计算最大的T
  while (right < len) {
    if (answerKey[right] == "T") {
      ans = Math.max(right - left + 1, ans);
      right++;
      continue;
    }

    if (answerKey[right] == "F") {
      win.push(right);
      // 超过K值
      if (win.length > k) {
        ans = Math.max(right - left, ans);
        // 更新left
        left = win[0] + 1;
        win = win.slice(1);
      } else {
        ans = Math.max(right - left + 1, ans);
      }
      right++;
    }
  }
  left = 0;
  right = 0;
  win = [];
  // 计算最大的F
  while (right < len) {
    if (answerKey[right] == "F") {
      ans = Math.max(right - left + 1, ans);
      right++;
      continue;
    }

    if (answerKey[right] == "T") {
      win.push(right);
      // 超过K值
      if (win.length > k) {
        ans = Math.max(right - left, ans);
        // 更新left
        left = win[0] + 1;
        win = win.slice(1);
      } else {
        ans = Math.max(right - left + 1, ans);
      }
      right++;
    }
  }
  return ans;
};

// TTFTTFTTF
// 012345678
maxConsecutiveAnswers(
  "TFTTTFFTFTTFFFTTTFFTFFFFTFTTTFFTFTFTFFFFFTTFTFTTFFFTTTTFFTTTTFFFFTFTFFFTFTFFTFTFFTFFTTFTTTTFTTTTTTTF",
  50
);

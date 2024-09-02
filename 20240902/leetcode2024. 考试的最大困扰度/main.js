/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-02 15:00:21                                                  *
 * @LastModifiedDate: 2024-09-02 16:40:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。

// 给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：

// 每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
// 请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(
    maxConsecutiveAnswersWithTarget(answerKey, k, "T"),
    maxConsecutiveAnswersWithTarget(answerKey, k, "F")
  );
};
function maxConsecutiveAnswersWithTarget(answerKey, k, target) {
  const n = answerKey.length;
  let left = 0;
  let right = 0;
  let res = 0;
  while (k >= 0 && right < n) {
    if (answerKey[right] === target) {
      right++;
      continue;
    } else if (k === 0) {
      // 没有可以转换的次数
      break;
    } else {
      right++;
      k--;
    }
  }
  res = right - left;
  if (res === n) return res;
  while (right < n) {
    if (answerKey[right] !== target) {
      // 将left左移，找到不是target的元素
      while (left < n && answerKey[left] === target) {
        left++;
      }
      left++;
      right++;
    }
    while (right < n && answerKey[right] === target) {
      right++;
      res = Math.max(res, right - left);
    }
  }
  return res;
}

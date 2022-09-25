/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 17:32:42                                                  *
 * @LastModifiedDate: 2022-09-25 17:43:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你下标从 0 开始、长度为 n 的字符串 pattern ，它包含两种字符，
// 'I' 表示 上升 ，'D' 表示 下降 。

// 你需要构造一个下标从 0 开始长度为 n + 1 的字符串，且它要满足以下条件：

// num 包含数字 '1' 到 '9' ，其中每个数字 至多 使用一次。
// 如果 pattern[i] == 'I' ，那么 num[i] < num[i + 1] 。
// 如果 pattern[i] == 'D' ，那么 num[i] > num[i + 1] 。
// 请你返回满足上述条件字典序 最小 的字符串 num。

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  // 123456789 ，把连续的D翻转就是答案
  const n = pattern.length;
  const ans = new Array(n + 1).fill(0).map((_v, i) => i + 1);
  let cur = 0;
  for (let i = 0; i < n; i++) {
    if (pattern[i] == "D") {
      cur++;
    } else {
      if (cur) {
        // I的情况，需要进行翻转
        reverse(ans, i - cur, i);
      }
      cur = 0;
    }
  }
  if (cur) {
    reverse(ans, n - cur, n);
  }
  return ans.join("");
};

var reverse = function (arr, start, end) {
  for (let i = start, j = end; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

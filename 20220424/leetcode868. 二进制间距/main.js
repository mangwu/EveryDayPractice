/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-24 08:42:34                                                  *
 * @LastModifiedDate: 2022-04-24 08:46:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数 n，找到并返回 n 的二进制表示中两个 相邻 1 之间的 最长距离 。
// 如果不存在两个相邻的 1，返回 0 。

// 如果只有 0 将两个 1 分隔开（可能不存在 0 ），则认为这两个 1 彼此 相邻 。
// 两个 1 之间的距离是它们的二进制表示中位置的绝对差。例如，"1001" 中的两个 1 的距离为 3 。

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let ans = 0;
  // 上一个1的位置
  let pre = -1;
  let idx = 0;
  while (n > 0) {
    // 获取最后一位数
    let last = n & 1;
    if (last) {
      if (pre !== -1) {
        ans = Math.max(idx - pre, ans);
        pre = idx;
      } else {
        pre = idx;
      }
    }
    idx++;
    n = n >> 1;
  }
  return ans;
};

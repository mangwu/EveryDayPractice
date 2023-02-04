/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-04 22:36:59                                                  *
 * @LastModifiedDate: 2023-02-04 22:40:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 banned 和两个整数 n 和 maxSum 。你需要按照以下规则选择一些整数：

// 被选择整数的范围是 [1, n] 。
// 每个整数 至多 选择 一次 。
// 被选择整数不能在数组 banned 中。
// 被选择整数的和不超过 maxSum 。
// 请你返回按照上述规则 最多 可以选择的整数数目。

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  const set = new Set(banned);
  let curSum = 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (set.has(i)) continue;
    curSum += i;
    if (curSum > maxSum) {
      break;
    }
    count++;
  }
  return count;
};

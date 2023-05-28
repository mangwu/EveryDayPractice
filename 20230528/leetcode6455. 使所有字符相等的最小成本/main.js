/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-28 10:42:12                                                  *
 * @LastModifiedDate: 2023-05-28 10:58:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、长度为 n 的二进制字符串 s ，你可以对其执行两种操作：

// 选中一个下标 i 并且反转从下标 0 到下标 i（包括下标 0 和下标 i ）的所有字符，成本为 i + 1 。
// 选中一个下标 i 并且反转从下标 i 到下标 n - 1（包括下标 i 和下标 n - 1 ）的所有字符，成本为 n - i 。
// 返回使字符串内所有字符 相等 需要的 最小成本 。

// 反转 字符意味着：如果原来的值是 '0' ，则反转后值变为 '1' ，反之亦然。

/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  // 翻转前i个字符需要多少次
  const n = s.length;
  // 顺序翻转
  const dp1 = new Array(n + 1).fill(0).map((v) => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      dp1[i + 1][0] = dp1[i][0];
      dp1[i + 1][1] = dp1[i][0] + (i + 1);
    } else {
      dp1[i + 1][0] = dp1[i][1] + (i + 1);
      dp1[i + 1][1] = dp1[i][1];
    }
  }
  // 逆序翻转
  const dp2 = new Array(n + 1).fill(0).map((v) => new Array(2).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      dp2[i][0] = dp2[i + 1][0];
      dp2[i][1] = dp2[i + 1][0] + (n - i);
    } else {
      dp2[i][0] = dp2[i + 1][1] + (n - i);
      dp2[i][1] = dp2[i + 1][1];
    }
  }
  let res = Infinity;
  // 遍历得到最小值
  for (let i = 0; i <= n; i++) {
    res = Math.min(res, dp1[i][0] + dp2[i][0], dp1[i][1] + dp2[i][1]);
  }
  return res;
};

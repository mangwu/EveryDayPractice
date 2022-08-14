/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 19:21:20                                                  *
 * @LastModifiedDate: 2022-08-14 19:40:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由若干 0 和 1 组成的字符串 s ，
// 请你计算并返回将该字符串分割成两个 非空 子字符串（即 左 子字符串和 右 子字符串）所能获得的最大得分。

// 「分割字符串的得分」为 左 子字符串中 0 的数量加上 右 子字符串中 1 的数量。

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // 先变量一遍获取1，0的个数
  let zeros = 0;
  let n = s.length;
  for (const ch of s) {
    if (ch == "0") {
      zeros++;
    }
  }
  let ones = n - zeros;
  // 0的数量
  let cur = s[0] == "0" ? 1 : 0;
  // 左边0的数量加上右边1的数量，1的数量由总1的数量减去左边1的数量，左边1的数量等于左边总数减去0的数量
  let ans = cur + ones - (1 - cur);
  for (let i = 1; i < n - 1; i++) {
    if (s[i] == "0") {
      cur++;
    }
    ans = Math.max(ans, cur + ones - (i + 1 - cur));
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-23 08:59:59                                                  *
 * @LastModifiedDate: 2024-09-23 09:46:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

// 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

// 返回一对观光景点能取得的最高分。

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  const n = values.length;
  const rightMax = new Array(n).fill(-Infinity);
  let cur = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    rightMax[i] = cur;
    cur = Math.max(cur, values[i] - i);
  }
  let res = -Infinity;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, values[i] + i + rightMax[i]);
  }
  return res;
};
// [8,1,5,2,6]
// [8,2,7,5,10]
// [8,0,3,-1,2]

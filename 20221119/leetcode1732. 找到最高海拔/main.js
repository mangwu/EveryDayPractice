/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-19 17:48:58                                                  *
 * @LastModifiedDate: 2022-11-19 18:05:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。

// 给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // 假设初始海拔为0;
  let init = 0;
  let ans = 0;
  for (const g of gain) {
    init += g;
    ans = Math.max(ans, init);
  }
  return init;
};

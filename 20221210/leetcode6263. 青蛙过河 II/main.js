/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-10 22:46:30                                                  *
 * @LastModifiedDate: 2022-12-10 23:21:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 stones ，数组中的元素 严格递增 ，表示一条河中石头的位置。

// 一只青蛙一开始在第一块石头上，它想到达最后一块石头，然后回到第一块石头。同时每块石头 至多 到达 一次。

// 一次跳跃的 长度 是青蛙跳跃前和跳跃后所在两块石头之间的距离。

// 更正式的，如果青蛙从 stones[i] 跳到 stones[j] ，跳跃的长度为 |stones[i] - stones[j]| 。
// 一条路径的 代价 是这条路径里的 最大跳跃长度 。

// 请你返回这只青蛙的 最小代价 。

/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
  let n = stones.length;
  const dp = new Array(n).fill(0);
  dp[1] = stones[1];
  dp[2] = stones[2];
  for (let i = 3; i < n; i++) {
    dp[i] = Math.min(
      Math.max(stones[i] - stones[i - 2], dp[i - 1]),
      Math.max(stones[i] - stones[i - 1], dp[i - 2])
    );
  }
  return dp[n-1];
};

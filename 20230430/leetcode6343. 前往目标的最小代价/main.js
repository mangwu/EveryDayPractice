/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-30 11:05:00                                                  *
 * @LastModifiedDate: 2023-04-30 11:41:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 start ，其中 start = [startX, startY] 表示你的初始位置位于二维空间上的 (startX, startY) 。另给你一个数组 target ，其中 target = [targetX, targetY] 表示你的目标位置 (targetX, targetY) 。

// 从位置 (x1, y1) 到空间中任一其他位置 (x2, y2) 的代价是 |x2 - x1| + |y2 - y1| 。

// 给你一个二维数组 specialRoads ，表示空间中存在的一些特殊路径。其中 specialRoads[i] = [x1i, y1i, x2i, y2i, costi] 表示第 i 条特殊路径可以从 (x1i, y1i) 到 (x2i, y2i) ，但成本等于 costi 。你可以使用每条特殊路径任意次数。

// 返回从 (startX, startY) 到 (targetX, targetY) 所需的最小代价。

/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function (start, target, specialRoads) {
  specialRoads = specialRoads.filter(
    (cur) => Math.abs(cur[0] - cur[1]) + Math.abs(cur[2] - cur[1]) < cur[3]
  ); // 过滤调用成本昂贵的的跃迁
  let cur = Math.abs(start[0] - target[0]) + Math.abs(start[1] - target[1]);
  specialRoads.sort((a, b) => {
    const disA1 = Math.abs(a[0] - start[0]) + Math.abs(a[1] - start[1]);
    const disA2 = Math.abs(a[2] - target[0]) + Math.abs(a[3] - target[1]);
    const disB1 = Math.abs(b[0] - start[0]) + Math.abs(b[1] - start[1]);
    const disB2 = Math.abs(b[0] - target[0]) + Math.abs(b[1] - target[1]);
    return disB - disA;
  });
  const n = specialRoads.length;
  const dp = new Array(n).fill(0);
  dp[0] = 
  for(let i = 0; i < )
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-24 17:15:06                                                  *
 * @LastModifiedDate: 2022-07-24 17:59:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。
// 我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。

// 环线上的公交车都可以按顺时针和逆时针的方向行驶。

// 返回乘客从出发点 start 到目的地 destination 之间的最短距离。
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;
  let sum = 0;
  for (const dis of distance) {
    sum += dis;
  }
  let ans = 0;
  for (let i = start; i < start + n; i++) {
    let target = i % n;
    if (target == destination) {
      break;
    }
    ans += distance[target];
  }
  return Math.min(ans, sum - ans);
};

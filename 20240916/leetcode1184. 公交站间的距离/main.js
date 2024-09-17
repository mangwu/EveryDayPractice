/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-16 22:26:10                                                  *
 * @LastModifiedDate: 2024-09-16 22:50:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。

// 环线上的公交车都可以按顺时针和逆时针的方向行驶。

// 返回乘客从出发点 start 到目的地 destination 之间的最短距离。

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination)
    return distanceBetweenBusStops(distance, destination, start);
  let sum = distance.reduce((a, b) => a + b);
  let res = 0;
  for (let i = start; i < destination; i++) res += distance[i];
  return Math.min(res, sum - res);
};

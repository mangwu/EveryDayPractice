/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-28 17:24:24                                                  *
 * @LastModifiedDate: 2022-02-28 17:36:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Given a number of points on a plane,
// your task is to find two points with the smallest distance between them in linearithmic O(n log n) time.
// 计算两个点之间的距离，返回最短距离的两个点，时间复杂度尽量为O(n logn)

// Calculate a pair of closest points in linearithmic time
/**
 * @description 最短距离点
 * @param {Array} points 二维数组点坐标
 * @returns {Array} 两个点坐标
 */
function closestPair(points) {
  // 使用O(n^2)的暴力解法
  let min = Number.MAX_VALUE;
  let p1;
  let p2;
  for (let i = 0; i < points.length; i++) {
    const point1 = points[i];
    for (let j = 0; j < points.length; j++) {
      if (j !== i) {
        const point2 = points[j];
        const distance =
          Math.pow((point1[0] - point2[0], 2)) +
          Math.pow((point1[1] - point2[1], 2));
        if (distance < min) {
          min = distance;
          p1 = point1;
          p2 = point2;
        }
      }
    }
  }
  return [p1, p2];
}

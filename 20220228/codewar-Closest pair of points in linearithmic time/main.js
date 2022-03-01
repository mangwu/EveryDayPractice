/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-28 17:24:24                                                  *
 * @LastModifiedDate: 2022-03-01 17:37:45                                      *
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
          Math.pow(point1[0] - point2[0], 2) +
          Math.pow(point1[1] - point2[1], 2);
        console.log(distance);
        if (distance < min) {
          min = distance;
          p1 = point1;
          p2 = point2;
        }
      }
    }
  }
  console.log(p1, p2);
  return [p1, p2];
}
// 数比较小的点时，容易计算,大数容易溢出，因为对数进行了平方的原因
closestPair([
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [6, 3], // D
  [6, 7], // E
  [7, 4], // F
  [7, 9], // G
]);
// 此题

// 要保证两个点的距离最短，需要保证每个点的x轴与y轴差值绝对值小，
// 而在差值之和相等的情况，则需要比较两个差值的差值是否越小
// 例如 A[2, 2] B[5, 5] C[4, 6] 差值(AB)[3,3] (AC)[2, 4] 虽然 3 + 3 = 2 + 4 但是9 + 9 < 4 + 16 
// D[2, 9] AD[0, 7] 7^2无论怎样都会大于上面的差值，因为0 + 7 > 6
// 所以无需使用Math.pow，使用

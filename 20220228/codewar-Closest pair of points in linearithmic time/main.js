/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-28 17:24:24                                                  *
 * @LastModifiedDate: 2022-03-03 19:16:14                                      *
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
        // console.log(distance);
        if (distance < min) {
          min = distance;
          p1 = point1;
          p2 = point2;
        }
      }
    }
  }
  // console.log(p1, p2);
  return [p1, p2];
}
// 数比较小的点时，容易计算,大数容易溢出，因为对数进行了平方的原因
closestPair([
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [4, 3], // D
  [5, 2], // E
  [6, 7], // F
  [7, 4], // G
  [7, 9], // H
]);
// 此题

// 要保证两个点的距离最短，需要保证每个点的x轴与y轴差值绝对值小，
// 而在差值之和相等的情况，则需要比较两个差值的差值是否越小
// 例如 A[2, 2] B[5, 5] C[4, 6] 差值(AB)[3,3] (AC)[2, 4] 虽然 3 + 3 = 2 + 4 但是9 + 9 < 4 + 16
// D[2, 9] AD[0, 7] 7^2无论怎样都会大于上面的差值，因为0 + 7 > 6
// 所以无需使用Math.pow，

/**
 * @description 最短距离点
 * @param {Array} points 二维数组点坐标
 * @returns {Array} 两个点坐标
 */
function closestPair2(points) {
  let min = Number.MAX_VALUE;
  let diff = Number.MAX_VALUE;
  let p1;
  let p2;
  for (let i = 0; i < points.length; i++) {
    const point1 = points[i];
    for (let j = 0; j < points.length; j++) {
      if (j !== i) {
        const point2 = points[j];
        const y = Math.abs(point1[1] - point2[1]);
        const x = Math.abs(point1[0] - point2[0]);
        const d = x + y;
        // console.log(distance);
        if (d < min) {
          min = d;
          diff = Math.abs(x - y);
          p1 = point1;
          p2 = point2;
        } else if (d == min && diff > Math.abs(x - y)) {
          min = d;
          diff = Math.abs(x - y);
          p1 = point1;
          p2 = point2;
        }
      }
    }
  }
  console.log(p1, p2);
  return [p1, p2];
}
closestPair2([
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [4, 3], // D
  [5, 2], // E
  [6, 7], // F
  [7, 4], // G
  [7, 9], // H
  [8, 9], //
  [9, 10],
  [12, 11],
  [15, 14],
]);
// 上述方法时间复杂度过高，O(n^2)
// 需要对点进行排序，使用分治法递归计算，达到O(nlogn)的时间复杂度

/**
 * @description 最短距离点
 * @param {Array} points 二维数组点坐标
 * @returns {Array} 两个点坐标
 */
function closestPair3(points) {
  const [midD, a, b] = divide_algorithm(points);
  console.log(midD, a, b);
  return [a, b];
}
// 计算距离
const distance = (x, y) => {
  return Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2));
};
const divide_algorithm = (points) => {
  const len = points.length;
  // 判断平面是否只有两个点
  if (len < 2) {
    return [Number.MAX_VALUE, null, null];
  }
  if (len == 2) {
    return [distance(points[0], points[1]), points[0], points[1]];
  }
  // 排序，按照横坐标排序
  points.sort((a, b) => a[0] - b[0]);
  // 中间点
  const half = Math.floor(len / 2);
  // 声明保存距离和点的值
  let minD, a, b;
  // 递归
  const [d1, a1, b1] = divide_algorithm(points.slice(0, half));
  const [d2, a2, b2] = divide_algorithm(points.slice(half));
  // 获得小值
  if (d1 > d2) {
    minD = d2;
    a = a2;
    b = b2;
  } else {
    minD = d1;
    a = a1;
    b = b1;
  }
  // 获得中位线的x值
  let calibration = points[half][0];
  // 根据中间位置将点分为两个部分
  const left = [],
    right = [];
  // 将在x轴范围距离小于d的中位数附近的值入数组
  for (const p of points) {
    if (calibration - minD < p[0] && calibration > p[0]) {
      left.push(p);
    } else if (calibration <= p[0] && p[0] < calibration + minD) {
      right.push(p);
    }
  }
  // 遍历left和right寻找最近点
  for (const l of left) {
    for (const r of right) {
      const dmid = distance(l, r);
      if (dmid < minD) {
        minD = dmid;
        a = l;
        b = r;
      }
    }
  }
  return [minD, a, b];
};

closestPair3([
  [2, 2], // A
  [2, 8], // B
  [5, 5], // C
  [5, 5],
  [4, 3], // D
  [5, 2], // E
  [6, 7], // F
  [7, 4], // G
  [7, 9], // H
  [8, 9], //
  [9, 10],
  [12, 11],
  [15, 14],
]);

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-16 09:01:57                                                  *
 * @LastModifiedDate: 2022-09-16 09:38:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们给出了一个（轴对齐的）二维矩形列表 rectangles 。 对于 rectangle[i] = [x1, y1, x2, y2]，
// 其中（x1，y1）是矩形 i 左下角的坐标， (xi1, yi1) 是该矩形 左下角 的坐标， (xi2, yi2) 是该矩形 右上角 的坐标。

// 计算平面中所有 rectangles 所覆盖的 总面积 。任何被两个或多个矩形覆盖的区域应只计算 一次 。

// 返回 总面积 。因为答案可能太大，返回 109 + 7 的 模 。
const MAX = BigInt(Math.pow(10, 9) + 7);
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  // 计算包含重复的数据
  // 再计算重复的数据
  let sum = 0n;
  let repeatSum = 0n;
  for (const rectangle of rectangles) {
    sum += BigInt(
      (rectangle[2] - rectangle[0]) * (rectangle[3] - rectangle[1])
    );
  }
  const n = rectangles.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      repeatSum += BigInt(computeRepeatArea(rectangles[i], rectangles[j]));
    }
  }
  return (sum - repeatSum) % MAX;
};

var computeRepeatArea = function (r1, r2) {
  if (r1[0] >= r2[2] || r1[2] <= r2[0]) {
    return 0;
  }
  if (r1[1] >= r2[3] || r2[3] <= r2[1]) {
    return 0;
  }
  return (
    Math.min(r2[2] - r1[0], r1[2] - r2[0], r2[2] - r2[0], r1[2] - r1[0]) *
    Math.min(r2[3] - r1[1], r1[3] - r2[1], r2[3] - r2[1], r1[3] - r1[1])
  );
};

// 4 + 3 + 2 = 9
// 2 + 1 + 1 
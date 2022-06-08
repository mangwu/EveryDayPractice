/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-08 08:55:48                                                  *
 * @LastModifiedDate: 2022-06-08 20:24:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 points ，其中 points[i] = [xi, yi]
// 表示 X-Y 平面上的一个点，如果这些点构成一个 回旋镖 则返回 true 。

// 回旋镖 定义为一组三个点，这些点 各不相同 且 不在一条直线上 。
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // 判断三点构成一个三角形
  if (points[0][0] == points[1][0] && points[1][0] == points[2][0]) {
    return false;
  }
  if (
    points[0].toString() == points[1].toString() ||
    points[0].toString() == points[2].toString() ||
    points[1].toString() == points[2].toString()
  ) {
    return false;
  }
  let k = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
  if ((points[2][1] - points[0][1]) / (points[2][0] - points[0][0]) != k) {
    return true;
  }
  return false;
};

// 叉乘法
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // 求两点构成的向量然后求叉乘
  let a = [points[0][0] - points[1][0], points[0][1] - points[1][1]];
  let b = [points[2][0] - points[1][0], points[2][1] - points[1][1]];
  // 叉乘不等于0就相当于不平行，故而满足条件
  return a[0] * b[1] - a[1] * b[0] != 0;
};

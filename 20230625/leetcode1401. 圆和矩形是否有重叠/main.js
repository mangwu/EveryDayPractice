/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-25 08:40:47                                                  *
 * @LastModifiedDate: 2023-06-25 10:01:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个以 (radius, xCenter, yCenter) 表示的圆和一个与坐标轴平行的矩形 (x1, y1, x2, y2) ，其中 (x1, y1) 是矩形左下角的坐标，而 (x2, y2) 是右上角的坐标。

// 如果圆和矩形有重叠的部分，请你返回 true ，否则返回 false 。

// 换句话说，请你检测是否 存在 点 (xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。



/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  // 先判断矩形和圆的大致方向
  let x = (x1 + x2) / 2;
  let y = (y1 + y2) / 2;
  if (x === xCenter && y === yCenter) return true;
  if (x === xCenter) {
    if ((Math.abs(y - y2) + radius) >= Math.abs(y - yCenter)) return true;
    return false
  }
  if (y === yCenter) {
    if (Math.abs(x - x2) + radius >= Math.abs(x - xCenter)) return true;
    return false
  }
  // 4 个象限
  if (x > xCenter && y > yCenter) {
    // 右上角 比较矩形左边和下边 (x1, y1)
    if (x1 > xCenter + radius || y1 > yCenter + radius) return false;
    if (x1 === xCenter + radius) return yCenter >= y1;
    if (y1 === yCenter + radius) return xCenter >= x1;
    return (x1 - xCenter) ** 2 + (y1 - yCenter) ** 2 <= radius ** 2 || x1 <= xCenter || y1 <= yCenter;
  }
  if (x < xCenter && y > yCenter) {
    // 左上角 比较矩形右边和下边 (x2, y1)
    if (x2 < xCenter - radius || y1 > yCenter + radius) return false;
    if (x2 === xCenter - radius) return yCenter >= y1;
    if (y1 === yCenter + radius) return xCenter <= x2;
    return (x2 - xCenter) ** 2 + (y1 - yCenter) ** 2 <= radius ** 2 || x2 >= xCenter || y1 <= yCenter;
  }
  if (x < xCenter && y < yCenter) {
    // 左下角 比较矩形右边和上边 (x2, y2)
    if (x2 < xCenter - radius || y2 < yCenter - radius) return false;
    if (x2 === xCenter - radius) return yCenter <= y2;
    if (y2 === yCenter - radius) return xCenter <= x2;
    return (x2 - xCenter) ** 2 + (y2 - yCenter) ** 2 <= radius ** 2 || x2 >= xCenter || y2 >= yCenter;
  }
  if (x > xCenter && y < yCenter) {
    // 右下角 比较矩形左边和上边 (x1, y2)
    if (x1 > xCenter + radius || y2 < yCenter - radius) return false;
    if (x1 === xCenter + radius) return yCenter <= y2;
    if (y2 === yCenter - radius) return xCenter >= x1;
    return (x1 - xCenter) ** 2 + (y2 - yCenter) ** 2 <= radius ** 2 || x1 <= xCenter || y2 >= yCenter;
  }
  return false;
};


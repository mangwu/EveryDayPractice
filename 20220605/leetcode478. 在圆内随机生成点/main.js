/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-05 14:34:37                                                  *
 * @LastModifiedDate: 2022-06-05 15:21:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定圆的半径和圆心的位置，实现函数 randPoint ，在圆中产生均匀随机点。

// 实现 Solution 类:

// Solution(double radius, double x_center, double y_center)
// 用圆的半径 radius 和圆心的位置 (x_center, y_center) 初始化对象
// randPoint() 返回圆内的一个随机点。圆周上的一点被认为在圆内。答案作为数组返回 [x, y] 。
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.x = x_center;
  this.y = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  while (true) {
    let x = Math.random() * this.radius * 2 - this.radius;
    let y = Math.random() * this.radius * 2 - this.radius;

    if (x ** 2 + y ** 2 <= this.radius ** 2) {
      return [this.x + x, this.y + y];
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

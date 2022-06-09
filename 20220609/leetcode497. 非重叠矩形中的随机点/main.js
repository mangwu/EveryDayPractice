/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-09 09:04:32                                                  *
 * @LastModifiedDate: 2022-06-09 16:49:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个由非重叠的轴对齐矩形的数组 rects ，其中 rects[i] = [ai, bi, xi, yi] 表示 (ai, bi) 是第 i 个矩形的左下角点，(xi, yi) 是第 i 个矩形的右上角角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。

// 在一个给定的矩形覆盖的空间内任何整数点都有可能被返回。

// 请注意 ，整数点是具有整数坐标的点。

// 实现 Solution 类:

// Solution(int[][] rects) 用给定的矩形数组 rects 初始化对象。
// int[] pick() 返回一个随机的整数点 [u, v] 在给定的矩形所覆盖的空间内。

/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.rects = rects;
  this.n = rects.length;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  // 随机选择其中一个矩形，然后在其上选择一个点
  const idx = Math.floor(Math.random() * this.n);
  const x =
    Math.floor(Math.random() * (this.rects[idx][2] - this.rects[idx][0] + 1)) +
    this.rects[idx][0];
  const y =
    Math.floor(Math.random() * (this.rects[idx][3] - this.rects[idx][1] + 1)) +
    this.rects[idx][1];
  return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

// 上述方式错误，因为随机选择一个矩形，这种方式的概率不公平
// 每个矩阵被选择的概率和其的面积正相关，各不相同，而上述的随机选择是等同的，故而不能如此选择
// 选择方式可以利用前缀和+二分查找的方式


/**
 * @param {number[][]} rects
 */
 var Solution = function (rects) {
  this.rects = rects;
  this.arr = [0];
  // 计算n个矩形的面积和
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  // 随机选择其中一个矩形，然后在其上选择一个点
  const x =
    Math.floor(Math.random() * (this.rects[idx][2] - this.rects[idx][0] + 1)) +
    this.rects[idx][0];
  const y =
    Math.floor(Math.random() * (this.rects[idx][3] - this.rects[idx][1] + 1)) +
    this.rects[idx][1];
  return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
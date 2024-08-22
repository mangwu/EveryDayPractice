/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-09 09:32:59                                                  *
 * @LastModifiedDate: 2024-07-09 09:44:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的数组 points ，它表示二维平面上一些点的整数坐标，其中 points[i] = [xi, yi] 。

// 两点之间的距离定义为它们的
// 曼哈顿距离
// 。

// 请你恰好移除一个点，返回移除后任意两点之间的 最大 距离可能的 最小 值。

/**
 * @param {number[][]} points
 * @return {number}
 */
var minimumDistance = function (points) {
  points.sort((a, b) => a[0] - b[0]);
};


// [[3,10],[5,15],[10,2],[4,4]]
// 3(10) 4(4) 5(15) 10(2)

// 
/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-21 22:57:01                                                  *
 * @LastModifiedDate: 2023-01-21 23:03:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个无穷大的网格图。一开始你在 (1, 1) ，你需要通过有限步移动到达点 (targetX, targetY) 。

// 每一步 ，你可以从点 (x, y) 移动到以下点之一：

// (x, y - x)
// (x - y, y)
// (2 * x, y)
// (x, 2 * y)
// 给你两个整数 targetX 和 targetY ，分别表示你最后需要到达点的 X 和 Y 坐标。如果你可以从 (1, 1) 出发到达这个点，请你返回true ，否则返回 false 。

/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
var isReachable = function(targetX, targetY) {
  if(targetX === 1)
};


// (x, y) => (x, y - x) => (x, y - 2x) => (x, y - 3x) ...
// (x, y) => (x - y , y) => (x - 2y, y) => (x - 3y, y) ...

// (2 * x, y) => (4 * x, y) => (8 * x, y)...
// (x, 2 * y) => (x, 4 * y) => (x, 8 * y)
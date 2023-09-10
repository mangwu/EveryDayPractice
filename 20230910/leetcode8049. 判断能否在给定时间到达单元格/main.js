/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-10 10:34:34                                                  *
 * @LastModifiedDate: 2023-09-10 10:48:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你四个整数 sx、sy、fx、fy  以及一个 非负整数 t 。

// 在一个无限的二维网格中，你从单元格 (sx, sy) 开始出发。每一秒，你 必须 移动到任一与之前所处单元格相邻的单元格中。

// 如果你能在 恰好 t 秒 后到达单元格 (fx, fy) ，返回 true ；否则，返回  false 。

// 单元格的 相邻单元格 是指该单元格周围与其至少共享一个角的 8 个单元格。你可以多次访问同一个单元格。

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [1, 0],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
  // 0 <= t <= 10^9
  // 不能用BFS求最短时间,因为t值过大
  // 最短时间可以通过|fx-sx|，|fy-sy|确定
  if (sx === fx && sy === fy) {
    // 这个时候需要对t进行判断
    // t===0，结果为真
    // t===1,结果为false
    // t===2，结果为真
    // t===3，结果为真
    return t !== 1;
  }
  const x = Math.abs(sx - fx); // x相差
  const y = Math.abs(sy - fy); // y相差
  let minTime = Math.max(x, y);
  return minTime <= t;
};

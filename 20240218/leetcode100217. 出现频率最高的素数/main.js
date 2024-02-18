/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-18 10:43:42                                                  *
 * @LastModifiedDate: 2024-02-18 11:04:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 、下标从 0 开始的二维矩阵 mat 。在每个单元格，你可以按以下方式生成数字：

// 最多有 8 条路径可以选择：东，东南，南，西南，西，西北，北，东北。
// 选择其中一条路径，沿着这个方向移动，并且将路径上的数字添加到正在形成的数字后面。
// 注意，每一步都会生成数字，例如，如果路径上的数字是 1, 9, 1，那么在这个方向上会生成三个数字：1, 19, 191 。
// 返回在遍历矩阵所创建的所有数字中，出现频率最高的、大于 10的素数；如果不存在这样的素数，则返回 -1 。如果存在多个出现频率最高的素数，那么返回其中最大的那个。

// 注意：移动过程中不允许改变方向。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

/**
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const hash = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const dir of DIRS) {
        let cur = mat[i][j];
        let x = i + dir[0];
        let y = j + dir[1];
        while (x >= 0 && y >= 0 && x < m && y < n) {
          cur = cur * 10 + mat[x][y];
          if (isPrimeNum(cur) && cur > 10)
            hash.set(cur, (hash.get(cur) | 0) + 1);
          x += dir[0];
          y += dir[1];
        }
      }
    }
  }
  let ans = -1;
  let nums = 0;
  for (const [prime, num] of hash) {
    if (num > nums) {
      ans = prime;
      nums = num;
    } else if (num === nums && prime > ans) {
      ans = prime;
    }
  }
  return ans;
};

/**
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPrimeNum(num) {
  const k = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= k; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

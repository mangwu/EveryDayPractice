/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-07 08:43:18                                                  *
 * @LastModifiedDate: 2025-02-07 16:53:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let num = 1;
  const ans = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const half = Math.floor(n / 2);
  for (let i = 0; i <= half; i++) {
    if (i === half && n % 2 === 1) {
      ans[i][i] = num;
      break;
    }
    let x = i;
    let y = i;
    // 横向右移
    while (y < n - i) ans[x][y++] = num++;
    y--;
    x++;
    // 竖向下移
    while (x < n - i) ans[x++][y] = num++;
    x--;
    y--;
    // 横向左移
    while (y >= i) ans[x][y--] = num++;
    y++;
    x--;
    // 竖向上移
    while (x > i) ans[x--][y] = num++;
  }
  return ans;
};

// 0,0 => 0,1 => ... => 0, n-1
// => 1, n-1 => 2, n-1 => ... => n-1, n-1
// => n - 2, n-1 => ... => 0, n-1
// => 0, n -2 => 0, n - 3,=> ... => 0, 1

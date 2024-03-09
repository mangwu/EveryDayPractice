/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-03 11:04:57                                                  *
 * @LastModifiedDate: 2024-03-03 11:17:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  // 最终结果只有6种情况，将这6种情况与grid相比即可
  const n = grid.length;
  let ans = Infinity;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i !== j) {
        const target = new Array(n).fill(i).map(() => new Array(n).fill(i));
        let middle = Math.floor(n / 2);
        const leftTop = [0, 0];
        const rightTop = [0, n - 1];
        const midMid = [middle, middle];
        for (let k = 0; k <= middle; k++) {
          target[leftTop[0]++][leftTop[1]++] = j;
          target[rightTop[0]++][rightTop[1]--] = j;
          target[midMid[0]++][midMid[1]] = j;
        }
        ans = Math.min(ans, getDiffs(grid, target));
      }
    }
  }
  return ans;
};

/**
 *
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @returns {number}
 */
var getDiffs = function (grid1, grid2) {
  const n = grid1.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid1[i][j] !== grid2[i][j]) ans++;
    }
  }
  return ans;
};

[
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 0],
];
[
  [2, 0, 2],
  [0, 2, 2],
  [0, 0, 0],
];
[
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 1],
];
[
  [2, 1, 2],
  [1, 2, 2],
  [1, 1, 1],
];
[
  [0, 2, 0],
  [2, 0, 0],
  [2, 2, 2],
];
[
  [1, 2, 1],
  [2, 1, 1],
  [2, 2, 2],
];

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-06 08:50:10                                                  *
 * @LastModifiedDate: 2023-06-06 08:54:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  // 保存行
  const hash = new Map();
  for (const arr of grid) {
    const str = arr.toString();
    hash.set(str, (hash.get(str) | 0) + 1);
  }
  const n = grid.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(grid[j][i]);
    }
    str = arr.toString();
    res += hash.get(str) | 0;
  }
  return res;
};

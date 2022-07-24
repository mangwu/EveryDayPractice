/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-24 10:39:02                                                  *
 * @LastModifiedDate: 2022-07-24 10:54:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  const hash = new Map();
  const n = grid.length;
  for (const row of grid) {
    const str = row.toString();
    if (hash.has(str)) {
      const k = hash.get(str);
      hash.set(str, k + 1);
    } else {
      hash.set(str, 1);
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let cur = [];
    for (let j = 0; j < n; j++) {
      cur.push(grid[j][i]);
    }
    const str = cur.toString();
    if (hash.has(str)) {
      ans += hash.get(str);
    }
  }
  return ans;
};

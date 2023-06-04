/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-04 10:41:43                                                  *
 * @LastModifiedDate: 2023-06-04 11:11:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  const hash = new Map();
  // 明确这样一个概念，列覆盖的是之前添加的每一行的值
  // 而行覆盖得到是之前添加的每一列的值
  // 去重
  for (const [type, index, val] of queries) {
    let cur = n * type + index;
    if (hash.has(cur)) {
      hash.delete(cur);
      hash.set(cur, val);
    } else {
      hash.set(cur, val);
    }
  }
  // 记录每一行的和值
  let rowSum = 0;
  let columnSum = 0;
  let res = 0;
  for (const [key, value] of hash) {
    // 列
    if (key >= n) {
      columnSum += value;
      res = res + value * n - rowSum;
    } else {
      rowSum += value; // 行
      res = res + value * n - columnSum;
    }
  }
  return res;
};

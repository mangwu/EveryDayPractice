/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-03 22:44:04                                                  *
 * @LastModifiedDate: 2022-09-03 23:42:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 m x n 二进制矩阵 mat 和一个整数 cols ，表示你需要选出的列数。

// 如果一行中，所有的 1 都被你选中的列所覆盖，那么我们称这一行 被覆盖 了。

// 请你返回在选择 cols 列的情况下，被覆盖 的行数 最大 为多少。

/**
 * @param {number[][]} mat
 * @param {number} cols
 * @return {number}
 */
 var maximumRows = function (mat, cols) {
  const m = mat.length;
  const n = mat[0].length;
  if (cols == n) {
    return m;
  }
  const getAllMay = (num) => {
    const set = new Set();
    if (num == 1) {
      for (let i = 0; i < n; i++) {
        set.add(1 << i);
      }
    } else {
      const res = getAllMay(num - 1);
      for (const item of res) {
        for (let i = 0; i < n; i++) {
          if (((item >> i) & 1) == 0) {
            set.add(item + (1 << i));
          }
        }
      }
    }
    return set;
  };
  const set = cols > n / 2 ? getAllMay(n - cols) : getAllMay(cols);
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        sum += 1 << (n - j - 1);
      }
    }
    mat[i] = sum;
  }
  let ans = 0;
  for (const val of set) {
    let curAns = 0;
    for (const matV of mat) {
      if (cols > n / 2) {
        if ((val & matV) == 0) {
          curAns++;
        }
      } else {
        if ((~val & matV) == 0) {
          curAns++;
        }
      }
    }
    ans = Math.max(ans, curAns);
  }
  return ans;
};
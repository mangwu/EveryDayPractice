/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-26 15:24:37                                                  *
 * @LastModifiedDate: 2022-07-27 11:02:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length;
  if (m == 0) {
    return false;
  }
  const n = matrix[0].length;
  // 暴力查找
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (target == matrix[i][j]) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length;
  if (m == 0) {
    return false;
  }
  const n = matrix[0].length;
  // 列二分
  let left = 0;
  let right = n;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (matrix[0][mid] == target) {
      return true;
    } else if (matrix[0][mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  for (let i = right - 1; i >= 0; i--) {
    // 从right开始查找
    if (matrix[m - 1][i] < target) {
      return false;
    }
    let l = 0;
    let r = m - 1;
    while (l <= r) {
      let mid = (l + r) >> 1;
      if (matrix[mid][i] == target) {
        return true;
      } else if (matrix[mid][i] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length;
  if (m == 0) {
    return false;
  }
  const n = matrix[0].length;
  // 从右上角开始查找
  let rows = 0;
  let columns = n - 1;
  while (rows < m && columns >= 0) {
    if (matrix[rows][columns] == target) {
      return true;
    } else if (matrix[rows][columns] > target) {
      // 在左边
      columns--;
    } else {
      // 比target小， 在下面
      rows++;
    }
  }
  return false;
};


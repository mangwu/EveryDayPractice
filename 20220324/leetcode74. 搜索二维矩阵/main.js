/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 22:45:08                                                  *
 * @LastModifiedDate: 2022-03-24 23:04:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  const len = m * n;
  let left = 0;
  let right = len - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const x = Math.floor(mid / n);
    const y = mid % n;
    if (matrix[x][y] == target) {
      return true;
    } else if (matrix[x][y] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

// 除了上述解法外，还可以通过两次二分查找
// 第一次查找第一个列，找到比target大的列的第一个元素
// 第二次查找该元素所在的行，时间复杂度同样为O（logmn）
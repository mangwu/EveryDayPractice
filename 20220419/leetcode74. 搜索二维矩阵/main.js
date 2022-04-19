/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 16:58:51                                                  *
 * @LastModifiedDate: 2022-04-19 17:06:18                                      *
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
//

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  // [0, len)
  let left = 0;
  let right = m * n;
  while (left < right) {
    let mid = (left + right) >> 1; // x * n + y
    const x = Math.floor(mid / n);
    const y = mid % n;
    if (matrix[x][y] == target) {
      return true;
    } else if (matrix[x][y] > target) {
      // 在左区间[left, mid)
      right = mid;
    } else {
      // 在右区间[mid+1，right]
      left = mid + 1;
    }
  }
  return false;
};

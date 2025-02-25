/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 19:37:23                                                  *
 * @LastModifiedDate: 2025-02-24 19:55:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你编写一段代码为所有数组实现  snail(rowsCount，colsCount) 方法，该方法将 1D
// 数组转换为以蜗牛排序的模式的 2D 数组。无效的输入值应该输出一个空数组。当 rowsCount * colsCount
//  !==nums.length 时。这个输入被认为是无效的。

// 蜗牛排序从左上角的单元格开始，从当前数组的第一个值开始。然后，它从上到下遍历第一列，接着移动到右边的下一列，
// 并从下到上遍历它。将这种模式持续下去，每列交替变换遍历方向，直到覆盖整个数组。例如，当给定输入数组
//  [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] ，当 rowsCount = 5 且 colsCount = 4 时
//  ，需要输出矩阵如下图所示。注意，矩阵沿箭头方向对应于原数组中数字的顺序

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  const nums = this;
  const n = nums.length;
  if (rowsCount * colsCount !== n) return [];
  const arr = new Array(rowsCount)
    .fill(0)
    .map(() => new Array(colsCount).fill(0));
  for (let k = 0; k < n; k++) {
    // 列数
    const j = Math.floor(k / rowsCount);
    // 行数
    let i = k % rowsCount;
    if (j % 2 === 1) i = rowsCount - i - 1; // 奇数列，行数到过来
    arr[i][j] = nums[k];
  }
  return arr;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

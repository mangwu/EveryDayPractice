/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-07 17:26:35                                                  *
 * @LastModifiedDate: 2022-06-07 17:27:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二维矩阵 matrix，以下类型的多个请求：

// 计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
// 实现 NumMatrix 类：

// NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
// int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
//

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

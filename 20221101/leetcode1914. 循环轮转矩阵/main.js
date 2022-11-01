/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-01 09:14:02                                                  *
 * @LastModifiedDate: 2022-11-01 11:14:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 m x n 的整数矩阵 grid​​​ ，其中 m 和 n 都是 偶数 ；另给你一个整数 k 。

// 矩阵由若干层组成，如下图所示，每种颜色代表一层：

// 矩阵的循环轮转是通过分别循环轮转矩阵中的每一层完成的。在对某一层进行一次循环旋转操作时，层中的每一个元素将会取代其 逆时针 方向的相邻元素。轮转示例如下：

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  let i = 0;
  let j = 0;
  let rowLen = n;
  let columnLen = m;
  let nums = 2 * n + 2 * m - 4;
  let shift = k % nums;
  while (rowLen >= 2 && columnLen >= 2) {
    if (shift === 0) {
      rowLen -= 2;
      columnLen -= 2;
      nums = rowLen * 2 + columnLen * 2 - 4;
      shift = k % nums;
      continue;
    }
    // 进行移位 竖
    for (let col = i; col < i + columnLen - 1; col++) {
      if (shift <= columnLen - col + i - 1) {
        // 只需要下移
        ans[col + shift][j] = grid[col][j];
        ans[m - (col + shift + 1)][n - j - 1] = grid[m - col - 1][n - j - 1];
      } else if (shift <= columnLen + rowLen - 2 - (col - i)) {
        // 需要下移后右移
        ans[i + columnLen - 1][j + shift - (columnLen - col + i - 1)] =
          grid[col][j];
        ans[m - (i + columnLen - 1) - 1][
          n - (j + shift - (columnLen - col + i - 1)) - 1
        ] = grid[m - col - 1][n - j - 1];
      } else if (shift <= columnLen * 2 + rowLen - 3 - (col - i)) {
        // 需要下移后右移后上移
        ans[
          i + columnLen - 1 - (shift - (columnLen - 1 + rowLen - 1 - (col - i)))
        ][j + rowLen - 1] = grid[col][j];
        ans[
          m -
            (i +
              columnLen -
              1 -
              (shift - (columnLen - 1 + rowLen - 1 - (col - i)))) -
            1
        ][n - (j + rowLen - 1) - 1] = grid[m - col - 1][n - j - 1];
      } else {
        // 需要下移后右移后上移后左移
        ans[i][
          j +
            rowLen -
            1 -
            (shift - (columnLen * 2 - 2 + rowLen - 1 - (col - i)))
        ] = grid[col][j];
        ans[m - i - 1][
          n -
            (j +
              rowLen -
              1 -
              (shift - (columnLen * 2 - 2 + rowLen - 1 - (col - i)))) -
            1
        ] = grid[m - col - 1][n - j - 1];
      }
    }
    rowLen -= 2;
    columnLen -= 2;
    nums = rowLen * 2 + columnLen * 2 - 4;
    shift = k % nums;
  }
  return ans;
};

// [2, 1]  [3,2]

// 上述的模拟过于复杂
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  let i = 0;
  let j = 0;
  let rowLen = n;
  let columnLen = m;
  let nums = 2 * n + 2 * m - 4;
  let shift = k % nums;
  while (rowLen >= 2 && columnLen >= 2) {
    // 将所有一层的元素看作一个一维数组，那么它移位后的位置就是原位置加上shfit然后mod上长度
    const arr = [];
    for (let col = i; col < i + columnLen - 1; col++) {
      arr.push(grid[col][j]);
    }
    for (let row = j; row < j + rowLen - 1; row++) {
      arr.push(grid[i + columnLen - 1][row]);
    }
    for (let col = i + columnLen - 1; col > i; col--) {
      arr.push(grid[col][j + rowLen - 1]);
    }
    for (let row = j + rowLen - 1; row > j; row--) {
      arr.push(grid[i][row]);
    }
    const newArr = [];
    for (let i = 0; i < nums; i++) {
      newArr[(i + shift) % nums] = arr[i];
    }
    let idx = 0;
    for (let col = i; col < i + columnLen - 1; col++, idx++) {
      ans[col][j] = newArr[idx];
    }
    for (let row = j; row < j + rowLen - 1; row++, idx++) {
      ans[i + columnLen - 1][row] = newArr[idx];
    }
    for (let col = i + columnLen - 1; col > i; col--, idx++) {
      ans[col][j + rowLen - 1] = newArr[idx];
    }
    for (let row = j + rowLen - 1; row > j; row--, idx++) {
      ans[i][row] = newArr[idx];
    }
    rowLen -= 2;
    columnLen -= 2;
    nums = rowLen * 2 + columnLen * 2 - 4;
    shift = k % nums;
    i++;
    j++;
  }
  return ans;
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  let i = 0;
  let j = 0;
  let rowLen = n;
  let columnLen = m;
  let nums = 2 * n + 2 * m - 4;
  let shift = k % nums;
  while (rowLen >= 2 && columnLen >= 2) {
    // 将所有一层的元素看作一个一维数组，那么它移位后的位置就是原位置加上shfit然后mod上长度
    // 继续优化，使用arr记录每个元素所在的位置
    const arr = [];
    for (let col = i; col < i + columnLen - 1; col++) {
      arr.push([col, j]);
    }
    for (let row = j; row < j + rowLen - 1; row++) {
      arr.push([i + columnLen - 1, row]);
    }
    for (let col = i + columnLen - 1; col > i; col--) {
      arr.push([col, j + rowLen - 1]);
    }
    for (let row = j + rowLen - 1; row > j; row--) {
      arr.push([i, row]);
    }
    // 然后遍历一遍arr，获取移位后的位置即可
    for (let i = 0; i < nums; i++) {
      let curVal = grid[arr[i][0]][arr[i][1]];
      let nextIdx = (i + shift) % nums;
      ans[arr[nextIdx][0]][arr[nextIdx][1]] = curVal;
    }

    rowLen -= 2;
    columnLen -= 2;
    nums = rowLen * 2 + columnLen * 2 - 4;
    shift = k % nums;
    i++;
    j++;
  }
  return ans;
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  let i = 0;
  let j = 0;
  let rowLen = n;
  let columnLen = m;
  let nums = 2 * n + 2 * m - 4;
  let shift = k % nums;
  while (rowLen >= 2 && columnLen >= 2) {
    // 将所有一层的元素看作一个一维数组，那么它移位后的位置就是原位置加上shfit然后mod上长度
    // 继续优化，使用arr记录每个元素所在的位置
    // 继续优化，原地修改
    const arr = [];
    for (let col = i; col < i + columnLen - 1; col++) {
      arr.push([col, j, grid[col][j]]);
    }
    for (let row = j; row < j + rowLen - 1; row++) {
      arr.push([i + columnLen - 1, row, grid[i + columnLen - 1][row]]);
    }
    for (let col = i + columnLen - 1; col > i; col--) {
      arr.push([col, j + rowLen - 1, grid[col][j + rowLen - 1]]);
    }
    for (let row = j + rowLen - 1; row > j; row--) {
      arr.push([i, row, grid[i][row]]);
    }
    // 然后遍历一遍arr，获取移位后的位置即可
    for (let i = 0; i < nums; i++) {
      let nextIdx = (i + shift) % nums;
      grid[arr[nextIdx][0]][arr[nextIdx][1]] = arr[i][2];
    }

    rowLen -= 2;
    columnLen -= 2;
    nums = rowLen * 2 + columnLen * 2 - 4;
    shift = k % nums;
    i++;
    j++;
  }
  return grid;
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const layer = Math.min(m / 2, n / 2);
  for (let i = 0; i < layer; i++) {
    // 将所有一层的元素看作一个一维数组，那么它移位后的位置就是原位置加上shfit然后mod上长度
    // 继续优化，使用arr记录每个元素所在的位置
    // 继续优化，原地修改
    // 继续优化，减去一些无用变量
    const arr = [];
    for (let col = i; col < m - i - 1; col++) {
      arr.push([col, i, grid[col][i]]);
    }
    for (let row = i; row < n - i - 1; row++) {
      arr.push([m - i - 1, row, grid[m - i - 1][row]]);
    }
    for (let col = m - i - 1; col > i; col--) {
      arr.push([col, n - i - 1, grid[col][n - i - 1]]);
    }
    for (let row = n - i - 1; row > i; row--) {
      arr.push([i, row, grid[i][row]]);
    }
    const tatal = arr.length;
    for (let j = 0; j < tatal; j++) {
      let nextIdx = (j + k) % tatal;  
      grid[arr[nextIdx][0]][arr[nextIdx][1]] = arr[j][2];
    }
  }
  return grid;
};

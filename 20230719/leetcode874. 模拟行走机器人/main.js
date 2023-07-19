/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-19 09:04:43                                                  *
 * @LastModifiedDate: 2023-07-19 10:23:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 commands ：

// -2 ：向左转 90 度
// -1 ：向右转 90 度
// 1 <= x <= 9 ：向前移动 x 个单位长度
// 在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。

// 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。

// 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）

//
// 注意：

// 北表示 +Y 方向。
// 东表示 +X 方向。
// 南表示 -Y 方向。
// 西表示 -X 方向。
// 北东南西
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const hashX = new Map();
  const hashY = new Map();
  for (const [x, y] of obstacles) {
    hashX.has(x) ? hashX.get(x).push(y) : hashX.set(x, [y]);
    hashY.has(y) ? hashY.get(y).push(x) : hashY.set(y, [x]);
  }
  for (const [_key, value] of hashX) {
    value.sort((a, b) => a - b);
  }
  for (const [_key, value] of hashY) {
    value.sort((a, b) => a - b);
  }
  let cur = [0, 0];
  let res = 0;
  let curDirIdx = 0;
  const n = commands.length;
  for (let i = 0; i < n; i++) {
    if (commands[i] < 0) {
      commands[i] === -1 ? curDirIdx++ : curDirIdx--;
      curDirIdx += 4;
      curDirIdx %= 4;
    } else {
      const curDir = DIRS[curDirIdx];
      if (curDir[0] === 0) {
        const arr = hashX.get(cur[0]);
        if (!arr) {
          cur[1] += commands[i] * curDir[1];
        } else {
          cur[1] = binarySearch(arr, cur[1], cur[1] + commands[i] * curDir[1]);
        }
      } else {
        const arr = hashY.get(cur[1]);
        if (!arr) {
          cur[0] += commands[i] * curDir[0];
        } else {
          cur[0] = binarySearch(arr, cur[0], cur[0] + commands[i] * curDir[0]);
        }
      }
      console.log(cur);
      res = Math.max(res, cur[0] ** 2 + cur[1] ** 2);
    }
  }
  return res;
};
/**
 * @description 二分查找能否从a到达b，如果它们之间存在障碍，则返回距离a能到达的最大障碍
 * @param {Array} arr 二分查找的数组,非递减
 * @param {number} a 初始位置
 * @param {number} b 尝试移动的位置
 * @returns {number} x 能到达的位置
 */
const binarySearch = function (arr, a, b) {
  const n = arr.length;
  if (a < b) {
    // 查找的范围在(a, b]之间
    let left = 0;
    let right = n - 1;
    let hasObstacle = false;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] > a && arr[mid] <= b) {
        // 有障碍
        hasObstacle = true;
        right = mid - 1;
      } else if (arr[mid] > b) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (hasObstacle) {
      return arr[left] - 1;
    } else {
      return b;
    }
  } else {
    // 查找范围在[b,a)之间
    let left = 0;
    let right = n - 1;
    let hasObstacle = false;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] >= b && arr[mid] < a) {
        hasObstacle = true;
        left = mid + 1;
      } else if (arr[mid] < b) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (hasObstacle) {
      return arr[right] + 1;
    } else {
      return b;
    }
  }
};

[
  8, -1, 5, -1, 9, -1, 2, -1, 5, -2, 6, -2, 1, -2, 5, -2, 3, -1, 4, -1, 4, -2,
  8, -1, 2, -2, 3, -1, 8,
][([1, 2], [3, 4], [5, 6], [-1, -4], [-1, 2], [2, -3], [3, -4], [-2, 5])];

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 10:32:37                                                  *
 * @LastModifiedDate: 2022-10-18 11:30:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。
// 该机器人可以接收以下三种类型的命令 commands ：

// -2 ：向左转 90 度
// -1 ：向右转 90 度
// 1 <= x <= 9 ：向前移动 x 个单位长度
// 在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。

// 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。

// 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）
// 注意：

// 北表示 +Y 方向。
// 东表示 +X 方向。
// 南表示 -Y 方向。
// 西表示 -X 方向。

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
  // 关键点在于如何判断机器人行走是否会碰到障碍物
  // 为此可以进行二分查找
  // 获取障碍物信息
  const hashX = new Map();
  const hashY = new Map();
  for (const obstacle of obstacles) {
    hashY.has(obstacle[0])
      ? hashY.get(obstacle[0]).push(obstacle[1])
      : hashY.set(obstacle[0], [obstacle[1]]);
    hashX.has(obstacle[1])
      ? hashX.get(obstacle[1]).push(obstacle[0])
      : hashX.set(obstacle[1], [obstacle[0]]);
  }
  for (const [_key, val] of hashX) {
    val.sort((a, b) => a - b);
  }
  for (const [_key, val] of hashY) {
    val.sort((a, b) => a - b);
  }
  let idx = 0;
  let start = [0, 0];
  let ans = 0;
  for (const command of commands) {
    if (command > 0) {
      // 步数
      preventObstacles(idx, start, hashX, hashY, command);
      ans = Math.max(ans, getDistance(start));
    } else if (command === -1) {
      // 转向 - 右转
      idx++;
      idx %= 4;
    } else {
      // 转向 - 左转
      idx--;
      idx += 4;
      idx %= 4;
    }
  }
  return ans;
};
/**
 *
 * @param {number} idx 方向0-北 1-东 2-南 3-西
 * @param {number[]} cur 当前位置
 * @param {map} hashX X轴方向阻碍点
 * @param {map} hashY Y轴方向阻碍点
 * @param {number} command 步数
 */
var preventObstacles = function (idx, cur, hashX, hashY, command) {
  // 轴
  let axle = null;
  // 行动区间
  let targetInterval = null;
  // idx表示方向
  if (idx == 0 || idx == 2) {
    // 南北方向，Y轴
    axle = hashY.get(cur[0]);
    // y变动
    targetInterval =
      idx == 0 ? [cur[1], cur[1] + command] : [cur[1] - command, cur[1]];
  } else {
    // 东西方向，X轴
    axle = hashX.get(cur[1]);
    // x变动
    targetInterval =
      idx == 1 ? [cur[0], cur[0] + command] : [cur[0] - command, cur[0]];
  }
  // 没有障碍可以直接到达
  if (!axle) {
    cur[0] += DIRS[idx][0] * command;
    cur[1] += DIRS[idx][1] * command;
    return;
  }
  // 轴上有障碍，判断是否会被阻碍，使用二分查找
  let left = 0;
  let right = axle.length - 1;
  let obstacle = -1;
  // 障碍在
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (axle[mid] >= targetInterval[0] && axle[mid] <= targetInterval[1]) {
      // 找到一个障碍
      if (idx == 0 || idx == 1) {
        // 找到最接近targetInterval[0]的障碍
        obstacle = axle[mid];
        right = mid - 1;
      } else {
        // 找到最接近targetInterval[1]的障碍
        obstacle = axle[mid];
        left = mid + 1;
      }
    } else if (axle[mid] < targetInterval[0]) {
      // 在右边
      left = mid + 1;
    } else {
      // 在左边
      right = mid - 1;
    }
  }
  if (obstacle == -1) {
    // 没有找到障碍
    cur[0] += DIRS[idx][0] * command;
    cur[1] += DIRS[idx][1] * command;
    return;
  }
  // 找到障碍了
  if (idx == 0) {
    // 北
    cur[1] = obstacle - 1;
  } else if (idx == 1) {
    // 东
    cur[0] = obstacle - 1;
  } else if (idx == 2) {
    // 南
    cur[1] = obstacle + 1;
  } else {
    // 西
    cur[0] = obstacle + 1;
  }
};

/**
 * @description 获取欧式距离的平方
 * @param {number[]} cur 当前位置
 * @returns 欧式距离的平方
 */
var getDistance = function (cur) {
  return cur[0] ** 2 + cur[1] ** 2;
};

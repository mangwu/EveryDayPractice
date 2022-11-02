/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-02 08:59:58                                                  *
 * @LastModifiedDate: 2022-11-02 10:22:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 towers 和一个整数 radius 。

// 数组  towers  中包含一些网络信号塔，其中 towers[i] = [xi, yi, qi] 表示第 i 个网络信号塔的坐标是 (xi, yi) 且信号强度参数为 qi 。所有坐标都是在  X-Y 坐标系内的 整数 坐标。两个坐标之间的距离用 欧几里得距离 计算。

// 整数 radius 表示一个塔 能到达 的 最远距离 。如果一个坐标跟塔的距离在 radius 以内，那么该塔的信号可以到达该坐标。在这个范围以外信号会很微弱，所以 radius 以外的距离该塔是 不能到达的 。

// 如果第 i 个塔能到达 (x, y) ，那么该塔在此处的信号为 ⌊qi / (1 + d)⌋ ，其中 d 是塔跟此坐标的距离。一个坐标的 信号强度 是所有 能到达 该坐标的塔的信号强度之和。

// 请你返回数组 [cx, cy] ，表示 信号强度 最大的 整数 坐标点 (cx, cy) 。如果有多个坐标网络信号一样大，请你返回字典序最小的 非负 坐标。

// 注意：

// 坐标 (x1, y1) 字典序比另一个坐标 (x2, y2) 小，需满足以下条件之一：
// 要么 x1 < x2 ，
// 要么 x1 == x2 且 y1 < y2 。
// ⌊val⌋ 表示小于等于 val 的最大整数（向下取整函数）。

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  let maxSignal = -1;
  let ans = [0, 0];
  for (const tower of towers) {
    if (tower[2] === 0) {
      continue;
    }
    const dots = getAllDots(tower[0], tower[1], radius);
    for (const dot of dots) {
      // 移除负数坐标
      if (dot[0] < 0 || dot[1] < 0) {
        continue;
      }
      let curSignal = 0;
      for (const tower of towers) {
        let dis = getDistance(dot[0], dot[1], tower[0], tower[1]);
        if (dis <= radius) {
          curSignal += Math.floor(tower[2] / (1 + dis));
        }
      }
      if (curSignal > maxSignal) {
        ans = dot;
        maxSignal = curSignal;
      } else if (curSignal === maxSignal) {
        if (dot[0] < ans[0] || (dot[0] === ans[0] && dot[1] < ans[1])) {
          ans = dot;
        }
      }
    }
  }
  return ans;
};

var getDistance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

var getAllDots = function (x, y, radius) {
  // 获取一个圆形中的所有可用点
  let ans = [];
  for (let i = x - radius, j = y - radius; i <= x + radius; i++, j++) {
    ans.push([i, y]);
    ans.push([x, j]);
  }
  let i = x - 1;
  let j = y + radius - 1;
  while (j > y) {
    while (getDistance(x, y, i, j) <= radius) {
      ans.push([i, j], [2 * x - i, j], [i, 2 * y - j], [2 * x - i, 2 * y - j]);
      i--;
    }
    j--;
    i = x - 1;
  }
  return ans;
};

console.log(
  bestCoordinate(
    [
      [44, 31, 4],
      [47, 27, 27],
      [7, 13, 0],
      [13, 21, 20],
      [50, 34, 18],
      [47, 44, 28],
    ],
    13
  )
);

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  let maxSignal = -1;
  let ans = [0, 0];
  const hash = new Map();
  for (const tower of towers) {
    if (tower[2] === 0) {
      continue;
    }
    getAllDotSignal(tower, hash, radius);
  }
  for (const [key, val] of hash) {
    const dot = key.split(",").map((v) => parseInt(v));
    if (val > maxSignal) {
      ans = dot;
      maxSignal = val;
    } else if (val === maxSignal) {
      if (dot[0] < ans[0] || (dot[0] === ans[0] && dot[1] < ans[1])) {
        ans = dot;
      }
    }
  }
  console.log(hash);
  return ans;
};
var setDotsSignal = function (x, y, hash, i, j, signal) {
  const dot1 = x + "," + y;
  if (x == 3 && y == 1) {
    console.log(i, j);
  }
  hash.has(dot1)
    ? hash.set(
        dot1,
        hash.get(dot1) + Math.floor(signal / (1 + getDistance(x, y, i, j)))
      )
    : hash.set(dot1, Math.floor(signal / (1 + getDistance(x, y, i, j))));
};

var getAllDotSignal = function (tower, hash, radius) {
  let x = tower[0];
  let y = tower[1];
  for (let i = x - radius, j = y - radius; i <= x + radius; i++, j++) {
    i >= 0 ? setDotsSignal(i, y, hash, x, y, tower[2]) : null;
    j >= 0 ? setDotsSignal(x, j, hash, x, y, tower[2]) : null;
  }
  let i = x - 1;
  let j = y + radius - 1;
  while (j > y) {
    while (getDistance(x, y, i, j) <= radius) {
      i >= 0 && j >= 0 ? setDotsSignal(i, j, hash, x, y, tower[2]) : null;
      2 * x - i >= 0 && j >= 0
        ? setDotsSignal(2 * x - i, j, hash, x, y, tower[2])
        : null;
      i >= 0 && 2 * y - j >= 0
        ? setDotsSignal(i, 2 * y - j, hash, x, y, tower[2])
        : null;
      2 * x - i >= 0 && 2 * y - j >= 0
        ? setDotsSignal(2 * x - i, 2 * y - j, hash, x, y, tower[2])
        : null;
      i--;
    }
    j--;
    i = x - 1;
  }
};

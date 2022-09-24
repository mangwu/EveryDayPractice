/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-24 15:14:46                                                  *
 * @LastModifiedDate: 2022-09-24 16:41:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 欢迎各位来到「力扣嘉年华」，接下来将为各位介绍在活动中广受好评的弹珠游戏。

// N*M 大小的弹珠盘的初始状态信息记录于一维字符串型数组 plate 中，
// 数组中的每个元素为仅由 "O"、"W"、"E"、"." 组成的字符串。其中：

// "O" 表示弹珠洞（弹珠到达后会落入洞中，并停止前进）；
// "W" 表示逆时针转向器（弹珠经过时方向将逆时针旋转 90 度）；
// "E" 表示顺时针转向器（弹珠经过时方向将顺时针旋转 90 度）；
// "." 表示空白区域（弹珠可通行）。
// 游戏规则要求仅能在边缘位置的 空白区域 处（弹珠盘的四角除外）沿
// 与边缘垂直 的方向打入弹珠，并且打入后的每颗弹珠最多能 前进 num 步。请返回符合上述要求且可以使弹珠最终入洞的所有打入位置。你可以 按任意顺序 返回答案。

// 注意：

// 若弹珠已到达弹珠盘边缘并且仍沿着出界方向继续前进，则将直接出界。
const eHash = new Map([
  ["1,0", [0, -1]],
  ["0,-1", [-1, 0]],
  ["-1,0", [0, 1]],
  ["0,1", [1, 0]],
]);
const wHash = new Map([
  ["1,0", [0, 1]],
  ["0,1", [-1, 0]],
  ["-1,0", [0, -1]],
  ["0,-1", [1, 0]],
]);
/**
 * @param {number} num
 * @param {string[]} plate
 * @return {number[][]}
 */
var ballGame = function (num, plate) {
  const m = plate.length;
  const n = plate[0].length;
  const ans = [];
  for (let i = 1; i < m - 1; i++) {
    if (plate[i][0] == "." && canformAPath(plate, m, n, i, 0, [0, 1], num)) {
      ans.push([i, 0]);
    }
    if (
      plate[i][n - 1] == "." &&
      canformAPath(plate, m, n, i, n - 1, [0, -1], num)
    ) {
      ans.push([i, n - 1]);
    }
  }
  for (let i = 1; i < n - 1; i++) {
    if (plate[0][i] == "." && canformAPath(plate, m, n, 0, i, [1, 0], num)) {
      ans.push([0, i]);
    }
    if (
      plate[m - 1][i] == "." &&
      canformAPath(plate, m, n, m - 1, i, [-1, 0], num)
    ) {
      ans.push([m - 1, i]);
    }
  }
  return ans;
};

var canformAPath = function (plate, m, n, i, j, direction, num) {
  while (num >= 0 && i >= 0 && j >= 0 && i < m && j < n) {
    const ch = plate[i][j];
    console.log(ch, i, j);
    if (ch == "O") {
      return true;
    } else if (ch == "E") {
      // 按照方向
      direction = eHash.get(direction.join(","));
    } else if (ch == "W") {
      direction = wHash.get(direction.join(","));
    }
    // 按照方向
    i += direction[0];
    j += direction[1];
    num--;
  }
  return false;
};

[
  "E...W..WW",
  ".E...O...",
  "...WO...W",
  "..OWW.O..",
  ".W.WO.W.E",
  "O..O.W...",
  ".OO...W..",
  "..EW.WEE.",
];
[
  "E...W..WW",
  ".E...O...",
  "...WO...W",
  "..OWW.O..",
  ".W.WO.W.E", // 入口
  "O..O.W...",
  ".OO...W..",
  "..EW.WEE.",
];

[];

[
  [4, 8],
  [7, 2],
  [7, 3],
];

[
  [1, 0],
  [1, 8],
  [3, 0],
  [3, 8],
  [4, 0],
  [6, 0],
  [7, 1],
  [0, 2],
  [0, 3],
  [7, 4],
  [0, 5],
  [0, 6],
];
[
  [0, 2],
  [0, 3],
  [0, 5],
  [0, 6],
  [1, 0],
  [1, 8],
  [3, 0],
  [3, 8],
  [4, 0],
  [6, 0],
  [7, 1],
  [7, 4],
];

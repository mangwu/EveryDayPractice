/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-19 09:00:50                                                  *
 * @LastModifiedDate: 2022-10-19 09:52:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。注意:

// 北方向 是y轴的正方向。
// 南方向 是y轴的负方向。
// 东方向 是x轴的正方向。
// 西方向 是x轴的负方向。
// 机器人可以接受下列三条指令之一：

// "G"：直走 1 个单位
// "L"：左转 90 度
// "R"：右转 90 度
// 机器人按顺序执行指令 instructions，并一直重复它们。

// 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let idx = 0;
  // 重复4次指令，没有重复就返回false
  let x = 0;
  let y = 0;
  for (let i = 0; i < 4; i++) {
    for (const instruction of instructions) {
      if (instruction === "L") {
        idx--;
        idx += 4;
        idx %= 4;
      } else if (instruction === "R") {
        idx++;
        idx %= 4;
      } else {
        x += DIRS[idx][0];
        y += DIRS[idx][1];
      }
    }
  }
  return x === 0 && y === 0;
};

nums = [1024, 29, 2, 1024, 1, 17, 1024, 1024, 4];
ops = ["^", "*", "|", "<<", "+"];



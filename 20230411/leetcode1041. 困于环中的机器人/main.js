/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-11 08:37:37                                                  *
 * @LastModifiedDate: 2023-04-11 08:52:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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

// 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 fals
const DIRS = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  // 遍历instructions，查看L和R，检查变化的方向是否一直是北方向
  let init = 0;
  let pointer = [0, 0];
  for (const ch of instructions) {
    if (ch === "L") {
      init++;
    } else if (ch === "R") {
      init--;
    } else {
      pointer[0] = pointer[0] + DIRS[init][0];
      pointer[1] = pointer[1] + DIRS[init][1];
    }
    init += 4;
    init %= 4;
  }
  if (pointer[0] === 0 && pointer[1] === 0) return true;
  return init !== 0;
};

// GLRLLGLL

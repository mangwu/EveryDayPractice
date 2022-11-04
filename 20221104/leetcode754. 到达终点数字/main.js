/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-04 08:53:49                                                  *
 * @LastModifiedDate: 2022-11-04 09:26:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一根无限长的数轴上，你站在0的位置。终点在target的位置。

// 你可以做一些数量的移动 numMoves :

// 每次你可以选择向左或向右移动。
// 第 i 次移动（从  i == 1 开始，到 i == numMoves ），在选择的方向上走 i 步。
// 给定整数 target ，返回 到达目标所需的 最小 移动次数(即最小 numMoves ) 。
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  // (1 + n)n / 2 <= target
  // 求n最解決target的值
  target = Math.abs(target);
  const sqrt = Math.floor(Math.sqrt(target * 2));
  for (let i = sqrt; ; i++) {
    let cur = (i * (i + 1)) / 2;
    if (cur === target) {
      return i;
    } else if (cur > target && (cur - target) % 2 == 0) {
      return i;
    } else if (cur > target && cur - target === i + 1) {
      return i + 1;
    }
  }
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-05 10:07:29                                                  *
 * @LastModifiedDate: 2024-11-05 10:33:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 正 整数 x 和 y ，分别表示价值为 75 和 10 的硬币的数目。

// Alice 和 Bob 正在玩一个游戏。每一轮中，Alice 先进行操作，Bob 后操作。每次操作中，玩家需要拿出价值 总和 为 115 的硬币。如果一名玩家无法执行此操作，那么这名玩家 输掉 游戏。

// 两名玩家都采取 最优 策略，请你返回游戏的赢家。

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
  // 115 = 75 + 10 * 4
  // 计算会进行几次找出
  let num = Math.min(x, Math.floor(y / 4));
  return num % 2 === 1 ? "Alice" : "Bob";
};

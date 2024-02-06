/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-04 09:38:10                                                  *
 * @LastModifiedDate: 2024-02-04 09:56:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你和你的朋友，两个人一起玩 Nim 游戏：

// 桌子上有一堆石头。
// 你们轮流进行自己的回合， 你作为先手 。
// 每一回合，轮到的人拿掉 1 - 3 块石头。
// 拿掉最后一块石头的人就是获胜者。
// 假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 1  => 1  a
  // 2  => 2  a
  // 3  => 3  a
  // 4  => 1 , 3 b
  // 5  => 1 , 1 , 3  a
  // 6  => 2 , 1,  3  a
  // 7  => 3 , 1,  3, a
  // 8  =>
  if (n % 4 === 0) return false;
  return true;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};

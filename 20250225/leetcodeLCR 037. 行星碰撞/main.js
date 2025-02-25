/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 20:15:13                                                  *
 * @LastModifiedDate: 2025-02-25 20:22:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组 asteroids，表示在同一行的小行星。

// 对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。

// 找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const asteroid of asteroids) {
    if (asteroid < 0) {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < -asteroid
      ) {
        // 弹出右方向的小行星
        stack.pop();
      }
      if (stack.length) {
        const peek = stack[stack.length - 1];
        if (peek === -asteroid) stack.pop(); // 相同
        else if (peek < 0) stack.push(asteroid); // 同方向
      } else stack.push(asteroid);
    } else stack.push(asteroid);
  }
  return stack;
};

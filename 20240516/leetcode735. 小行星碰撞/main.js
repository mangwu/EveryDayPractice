/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-16 15:14:58                                                  *
 * @LastModifiedDate: 2024-05-16 15:45:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组 asteroids，表示在同一行的小行星。

// 对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。

// 找出碰撞后剩下的所有小行星。碰撞规则：两个小行星相互碰撞，较小的小行星会爆炸。如果两颗小行星大小相同，则两颗小行星都会爆炸。两颗移动方向相同的小行星，永远不会发生碰撞。

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
        stack.pop();
      }
      if (stack.length) {
        if (stack[stack.length - 1] === -asteroid) {
          stack.pop(); // 相等
        } else if (stack[stack.length - 1] < 0) {
          stack.push(asteroid);
        }
      } else {
        stack.push(asteroid);
      }
    } else stack.push(asteroid);
  }
  return stack;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-13 09:11:46                                                  *
 * @LastModifiedDate: 2022-07-13 09:39:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组 asteroids，表示在同一行的行星。

// 对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。
// 每一颗行星以相同的速度移动。

// 找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。
// 如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  // 使用栈
  const stack = [];
  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      if (stack.length == 0) {
        stack.push(asteroid);
        continue;
      }
      while (stack.length > 0) {
        const a = stack.pop();
        if (a < 0) {
          stack.push(a);
          stack.push(asteroid);
          break;
        } else {
          if (Math.abs(asteroid) == a) {
            break;
          } else if (Math.abs(asteroid) > a) {
            if (stack.length == 0) {
              stack.push(asteroid);
              break;
            }
            continue;
          } else {
            // asteroid被销毁
            stack.push(a);
            break;
          }
        }
      }
    }
  }
  return stack;
};

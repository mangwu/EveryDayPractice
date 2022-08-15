/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 10:25:14                                                  *
 * @LastModifiedDate: 2022-08-15 10:53:58                                      *
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

// 找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。
// 两颗移动方向相同的行星，永远不会发生碰撞。

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  // 双指针
  let left = 0;
  let right = 1;
  while (right < asteroids.length) {
    if (asteroids[left] > 0 && asteroids[right] < 0) {
      // 相碰
      if (asteroids[left] > -asteroids[right]) {
        // 右边的消失
        asteroids.splice(right, 1);
      } else if (asteroids[left] < -asteroids[right]) {
        // 左边的消失
        asteroids.splice(left, 1);
        if (left > 0) {
          left--;
          right--;
        }
      } else {
        // 两个都消失
        asteroids.splice(left, 2);
        // 需要前移一位，有这种情况，如8 9 -9 -2
        if (left > 0) {
          left--;
          right--;
        }
      }
    } else {
      left++;
      right++;
    }
  }
  return asteroids;
};

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  // 使用栈模拟
  const stack = [];
  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      // 负数，可能发生碰撞
      if (stack.length == 0) {
        stack.push(asteroid);
        continue;
      }
      while (stack.length > 0) {
        let pre = stack.pop();
        // 遇到左行行星
        if (pre < 0) {
          stack.push(pre);
          stack.push(asteroid);
          break;
        }
        if (pre > -asteroid) {
          // 栈顶元素大
          stack.push(pre);
          break;
        } else if (pre < -asteroid) {
          // 栈顶元素小
          if (stack.length == 0) {
            stack.push(asteroid);
            break;
          }
        } else {
          // 相等
          break;
        }
      }
    }
  }
  return stack;
};

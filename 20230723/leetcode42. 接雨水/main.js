/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-23 22:02:58                                                  *
 * @LastModifiedDate: 2023-07-23 22:28:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = [];
  const n = height.length;
  const next = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      stack.pop();
    }
    if (stack.length) next[i] = stack[stack.length - 1];
    stack.push(i);
  }
  let res = 0;

  for (let i = 0; i < n; i++) {
    const nxt = next[i];
    if (nxt == -1) {
      // 当前元素最高，找到下一个等于-1的
      let j = i + 1;
      let sum = 0;
      while (j < height.length && next[j] !== -1) {
        sum += height[j];
        j++;
      }
      if (j === n) break;
      res += Math.min(height[i], height[j]) * (j - i - 1) - sum;
      i = j - 1;
    } else {
      let sum = 0;
      for (let j = i + 1; j < nxt; j++) {
        sum += height[j];
      }
      res += Math.min(height[i], height[nxt]) * (nxt - i - 1) - sum;
      i = nxt - 1;
    }
  }
  return res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-05 16:29:12                                                  *
 * @LastModifiedDate: 2022-06-05 17:57:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，
// 并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

// 注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，
// 但不是 32 位整数 ，同样返回 -1 。

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  // 单个的没有结果
  if (n <= 11) {
    return -1;
  }
  const arr = n
    .toString()
    .split("")
    .map((v) => parseInt(v));
  let len = arr.length;
  const nextGreater = new Array(len).fill(-1);
  const stack = [];
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      nextGreater[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  for (let i = len - 1; i >= 0; i--) {
    if (nextGreater[i] !== -1) {
      // 找到第一个存在后续大与自身的位置
      let front = arr.slice(0, i + 1);
      let after = arr.slice(i + 1);
      after.sort((a, b) => a - b);
      let idx = 0;
      // 找到第一个比它大的元素
      for (; idx < after.length; idx++) {
        if (after[idx] > front[i]) {
          break;
        }
      }
      [after[idx], front[i]] = [front[i], after[idx]];
      let target = parseInt(front.join("") + after.join(""));
      if (target > Math.pow(2, 31) - 1) {
        return -1;
      }
      return target;
    }
  }
  return -1;
};

// 8408654
// 8440568

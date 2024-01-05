/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-05 13:40:26                                                  *
 * @LastModifiedDate: 2024-01-05 15:34:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个人排成一个队列，从左到右 编号为 0 到 n - 1 。给你以一个整数数组 heights ，每个整数 互不相同，heights[i] 表示第 i 个人的高度。

// 一个人能 看到 他右边另一个人的条件是这两人之间的所有人都比他们两人 矮 。更正式的，第 i 个人能看到第 j 个人的条件是 i < j 且 min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]) 。

// 请你返回一个长度为 n 的数组 answer ，其中 answer[i] 是第 i 个人在他右侧队列中能 看到 的 人数 。

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  // 不考虑时间复杂度的暴力解法
  // 求出每个人右边的人身高组成的单调队列
  const n = heights.length;
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n - 1; i++) {
    // 每个整数互不相同
    let pre = 0;
    let cur = 0;
    for (let j = i + 1; j < n; j++) {
      if (heights[j] > pre) {
        cur++;
        pre = heights[j];
        if (pre > heights[i]) break;
      }
    }
    ans[i] = cur;
  }
  return ans;
};

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  // 倒叙遍历 单调队列/单调栈
  const n = heights.length;
  const stack = [];
  const ans = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let popNum = 0;
    while (stack.length && stack[stack.length - 1] < heights[i]) {
      popNum++;
      stack.pop();
    }
    if (stack.length) popNum++;
    ans[i] = popNum;
    stack.push(heights[i]);
  }
  return ans;
};

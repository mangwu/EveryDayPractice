/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-17 08:46:18                                                  *
 * @LastModifiedDate: 2022-10-17 09:09:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 904. 水果成篮

// 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，
// 其中 fruits[i] 是第 i 棵树上的水果 种类 。

// 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

// 你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
// 你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。
// 采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
// 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
// 给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 滑动窗口
  // 只有两种类型的最长连续子数组
  let left = 0;
  let right = 0;
  let first = [];
  let second = [];
  let ans = 1;
  const n = fruits.length;
  while (right < n) {
    if (first.length == 0 || first[0] === fruits[right]) {
      first[0] = fruits[right];
      first[1] = right;
    } else if (second.length == 0 || second[0] === fruits[right]) {
      second[0] = fruits[right];
      second[1] = right;
    } else {
      // 第三者出现了,
      if (first[1] < second[1]) {
        left = first[1] + 1;
        first = [fruits[right], right];
      } else {
        left = second[1] + 1;
        second = [fruits[right], right];
      }
    }
    ans = Math.max(ans, right - left + 1);
    console.log(left, right, ans);
    right++;
  }
  return ans;
};

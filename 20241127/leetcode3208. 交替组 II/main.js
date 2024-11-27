/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-27 19:04:33                                                  *
 * @LastModifiedDate: 2024-11-27 19:16:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 colors 和一个整数 k ，colors表示一个由红色和蓝色瓷砖组成的环，第 i 块瓷砖的颜色为 colors[i] ：

// colors[i] == 0 表示第 i 块瓷砖的颜色是 红色 。
// colors[i] == 1 表示第 i 块瓷砖的颜色是 蓝色 。
// 环中连续 k 块瓷砖的颜色如果是 交替 颜色（也就是说除了第一块和最后一块瓷砖以外，中间瓷砖的颜色与它 左边 和 右边 的颜色都不同），那么它被称为一个 交替 组。

// 请你返回 交替 组的数目。

// 注意 ，由于 colors 表示一个 环 ，第一块 瓷砖和 最后一块 瓷砖是相邻的。

/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const n = colors.length;
  // 双指针，left和right
  let left = 0; // 从0-n-1遍历一遍
  let right = 1;
  let lastIdx = 0; // 记录最后一个满足lastIdx - right是交替的组
  let res = 0;
  while (left < n) {
    while (right - left + 1 < k) {
      // 不交替
      if (colors[right % n] === colors[(right - 1) % n]) lastIdx = right;
      right++;
    }
    // 判断当前区间是否交替
    console.log([left, right]);
    console.log("lastIdx", lastIdx);
    if (left === lastIdx) {
      res++;
      left++;
      lastIdx++;
    } else {
      // 不交替
      left = lastIdx;
    }
  }
  return res;
};

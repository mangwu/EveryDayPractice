/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-10 02:08:42                                                  *
 * @LastModifiedDate: 2025-02-10 02:29:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 双指针
  // 初始宽度最宽，移动高度小的，因为移动高度大的面积一定会变小 => 高度最小值不可能变大，而宽度变小了
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let res = 0;
  while (left < right) {
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left));
    if (height[left] <= height[right]) {
      left++;
    } else right--;
  }
  return res;
};

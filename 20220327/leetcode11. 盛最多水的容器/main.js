/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-27 20:20:43                                                  *
 * @LastModifiedDate: 2022-03-27 21:40:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 使用双指针，区域面积为短的高度乘以二者距离（索引相减）
  const len = height.length;
  let i = 0;
  let j = len - 1;
  let max = 0;
  while (i < j) {
    max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
    // 判断哪个指针向内移动 应该移动值较小
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

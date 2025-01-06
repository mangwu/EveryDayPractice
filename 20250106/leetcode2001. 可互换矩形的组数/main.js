/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-06 21:17:58                                                  *
 * @LastModifiedDate: 2025-01-06 21:28:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 用一个下标从 0 开始的二维整数数组 rectangles 来表示 n 个矩形，其中 rectangles[i] = [widthi, heighti] 表示第 i 个矩形的宽度和高度。

// 如果两个矩形 i 和 j（i < j）的宽高比相同，则认为这两个矩形 可互换 。更规范的说法是，两个矩形满足 widthi/heighti == widthj/heightj（使用实数除法而非整数除法），则认为这两个矩形 可互换 。

// 计算并返回 rectangles 中有多少对 可互换 矩形。

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  const hash = new Map();
  let res = 0;
  for (const [width, height] of rectangles) {
    const rate = width / height;
    if (hash.has(rate)) res += hash.get(rate);
    hash.set(rate, (hash.get(rate) || 0) + 1);
  }
  return res;
};

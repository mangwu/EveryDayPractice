/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-15 09:26:38                                                  *
 * @LastModifiedDate: 2024-10-15 09:49:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 red 和 blue，分别表示红色球和蓝色球的数量。你需要使用这些球来组成一个三角形，满足第 1 行有 1 个球，第 2 行有 2 个球，第 3 行有 3 个球，依此类推。

// 每一行的球必须是 相同 颜色，且相邻行的颜色必须 不同。

// 返回可以实现的三角形的 最大 高度。

/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  return Math.max(getHeight(red, blue), getHeight(blue, red));
};

const getHeight = function (red, blue) {
  let res = 0;
  let cur = 1;
  let curNum = red;
  while (curNum >= cur) {
    res++;
    curNum -= cur;
    if (res % 2 === 1) {
      red = curNum;
      curNum = blue;
    } else {
      blue = curNum;
      curNum = red;
    }
    cur++;
  }
  return res;
};

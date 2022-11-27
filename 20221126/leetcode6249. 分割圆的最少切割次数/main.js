/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-26 22:30:14                                                  *
 * @LastModifiedDate: 2022-11-26 22:34:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 圆内一个 有效切割 ，符合以下二者之一：

// 该切割是两个端点在圆上的线段，且该线段经过圆心。
// 该切割是一端在圆心另一端在圆上的线段。
// 一些有效和无效的切割如下图所示。
// 给你一个整数 n ，请你返回将圆切割成相等的 n 等分的 最少 切割次数。

/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2 == 0) {
    return n / 2;
  }
  return n;
};

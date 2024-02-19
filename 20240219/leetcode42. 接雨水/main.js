/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-19 17:28:49                                                  *
 * @LastModifiedDate: 2024-02-19 17:30:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 单调栈 + 前缀和
  // 单调栈计算下一个更高（）的元素的索引
  const stack = [];
  
};
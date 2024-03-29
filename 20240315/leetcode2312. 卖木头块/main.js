/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-03-15 09:14:02                                                  *
 * @LastModifiedDate: 2024-03-15 17:25:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 m 和 n ，分别表示一块矩形木块的高和宽。同时给你一个二维整数数组 prices ，其中 prices[i] = [hi, wi, pricei] 表示你可以以 pricei 元的价格卖一块高为 hi 宽为 wi 的矩形木块。

// 每一次操作中，你必须按下述方式之一执行切割操作，以得到两块更小的矩形木块：

// 沿垂直方向按高度 完全 切割木块，或
// 沿水平方向按宽度 完全 切割木块
// 在将一块木块切成若干小木块后，你可以根据 prices 卖木块。你可以卖多块同样尺寸的木块。你不需要将所有小木块都卖出去。你 不能 旋转切好后木块的高和宽。

// 请你返回切割一块大小为 m x n 的木块后，能得到的 最多 钱数。

// 注意你可以切割木块任意次。

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function (m, n, prices) {
  // 记忆化搜索
  // 优先选择prices中单位内利润最高的木块，
  prices.sort((a, b) => b[2] / (b[0] * b[1]) - a[2] / (a[0] * a[1]));
  const visited = new Array(m).fill(0).map((v) => new Array(n).fill(false));
  let 
  const dfs = () => {
    
  }
  // 找到第一个合法的木块
  

};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-04 22:36:58                                                  *
 * @LastModifiedDate: 2023-03-04 22:42:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个无穷大的二维网格图，一开始所有格子都未染色。给你一个正整数 n ，表示你需要执行以下步骤 n 分钟：

// 第一分钟，将 任一 格子染成蓝色。
// 之后的每一分钟，将与蓝色格子相邻的 所有 未染色格子染成蓝色。
// 下图分别是 1、2、3 分钟后的网格图。

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  let res = 1;
  for (let i = 1; i < n; i++) {
    res += i * 4;
  }
  return res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-25 20:07:42                                                  *
 * @LastModifiedDate: 2022-12-26 09:21:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个立方体房间，其长度、宽度和高度都等于 n 个单位。请你在房间里放置 n 个盒子，每个盒子都是一个单位边长的立方体。放置规则如下：

// 你可以把盒子放在地板上的任何地方。
// 如果盒子 x 需要放置在盒子 y 的顶部，那么盒子 y 竖直的四个侧面都 必须 与另一个盒子或墙相邻。
// 给你一个整数 n ，返回接触地面的盒子的 最少 可能数量。

/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function (n) {
  // 找第i层，第j列
  let cur = 0;
  let i = 0;
  while (cur < n) {
    i++;
    cur += ((i + 1) * i) / 2;
  }
  cur -= ((i + 1) * i) / 2;
  i--;
  // 开始计算第i+1层，第j列
  let ans = ((i + 1) * i) / 2;
  let j = 1;
  while (cur < n) {
    cur += j;
    j++;
    ans++;
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-28 22:10:25                                                  *
 * @LastModifiedDate: 2024-07-28 22:26:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在二维平面上的 x 轴上，放置着一些方块。

// 给你一个二维整数数组 positions ，其中 positions[i] = [lefti, sideLengthi] 表示：第 i 个方块边长为 sideLengthi ，其左侧边与 x 轴上坐标点 lefti 对齐。

// 每个方块都从一个比目前所有的落地方块更高的高度掉落而下。方块沿 y 轴负方向下落，直到着陆到 另一个正方形的顶边 或者是 x 轴上 。一个方块仅仅是擦过另一个方块的左侧边或右侧边不算着陆。一旦着陆，它就会固定在原地，无法移动。

// 在每个方块掉落后，你必须记录目前所有已经落稳的 方块堆叠的最高高度 。

// 返回一个整数数组 ans ，其中 ans[i] 表示在第 i 块方块掉落后堆叠的最高高度。

/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  const n = positions.length;
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const [left, len] = positions[i];
    let res = len;
    for (let j = i - 1; j >= 0; j--) {
      // 找到重叠的方块
      const [left2, len2] = positions[j];
      if (left >= left2 + len2 || left2 >= left + len) continue; // 无交集
      res = Math.max(res, len + ans[j]);
    }
    ans[i] = res;
  }
  for (let i = 1; i < n; i++) {
    ans[i] = Math.max(ans[i], ans[i - 1]);
  }
  return ans;
};

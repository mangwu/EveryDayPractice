/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-26 09:16:37                                                  *
 * @LastModifiedDate: 2022-05-26 11:19:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在无限长的数轴（即 x 轴）上，我们根据给定的顺序放置对应的正方形方块。

// 第 i 个掉落的方块（positions[i] = (left, side_length)）是正方形，
// 其中 left 表示该方块最左边的点位置(positions[i][0])，side_length 表示该方块的边长(positions[i][1])。

// 每个方块的底部边缘平行于数轴（即 x 轴），并且从一个比目前所有的落地方块更高的高度掉落而下。
// 在上一个方块结束掉落，并保持静止后，才开始掉落新方块。

// 方块的底边具有非常大的粘性，并将保持固定在它们所接触的任何长度表面上（无论是数轴还是其他方块）。
// 邻接掉落的边不会过早地粘合在一起，因为只有底边才具有粘性。

//

// 返回一个堆叠高度列表 ans 。每一个堆叠高度 ans[i] 表示在通过 positions[0], positions[1], ..., positions[i]
// 表示的方块掉落结束后，目前所有已经落稳的方块堆叠的最高高度。
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  const n = positions.length;
  const height = new Array(n).fill(0);
  // 间断区间
  for (let i = 0; i < n; i++) {
    // 暴力枚举所有重合区间，找到最大值即可
    let left = positions[i][0];
    let right = positions[i][0] + positions[i][1];
    let h = positions[i][1];
    for (let j = 0; j < i; j++) {
      let left2 = positions[j][0];
      let right2 = positions[j][0] + positions[j][1];
      if (!(left >= right2 || right <= left2)) {
        h = Math.max(h, height[j] + positions[i][1]);
      }
    }
    height[i] = h;
  }
  for (let i = 1; i < n; i++) {
    height[i] = Math.max(height[i], height[i - 1]);
  }
  return height;
};

// [0,5] [1, 3] [3, 4] [3,6]
// [2, 6]

// [0, 5] [1, 3] []

// [1,3]
// [5, 6]

// [[9,6],[2,2],[2,6]]
// [9,15]
// [2,4]
// [2,8]

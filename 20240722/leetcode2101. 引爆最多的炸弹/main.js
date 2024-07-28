/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-22 09:12:45                                                  *
 * @LastModifiedDate: 2024-07-22 09:50:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个炸弹列表。一个炸弹的 爆炸范围 定义为以炸弹为圆心的一个圆。

// 炸弹用一个下标从 0 开始的二维整数数组 bombs 表示，其中 bombs[i] = [xi, yi, ri] 。xi 和 yi 表示第 i 个炸弹的 X 和 Y 坐标，ri 表示爆炸范围的 半径 。

// 你需要选择引爆 一个 炸弹。当这个炸弹被引爆时，所有 在它爆炸范围内的炸弹都会被引爆，这些炸弹会进一步将它们爆炸范围内的其他炸弹引爆。

// 给你数组 bombs ，请你返回在引爆 一个 炸弹的前提下，最多 能引爆的炸弹数目。

/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const n = bombs.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    const [x1, y1, r1] = bombs[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2, r2] = bombs[j];
      const dis = getDistance([x1, y1], [x2, y2]);
      if (r1 >= dis) hash.has(i) ? hash.get(i).push(j) : hash.set(i, [j]);
      if (r2 >= dis) hash.has(j) ? hash.get(j).push(i) : hash.set(j, [i]);
    }
  }
  let ans = 1;
  for (let i = 0; i < n; i++) {
    const visited = [];
    let queue = [i];
    let res = 1;
    visited[i] = true;
    while (queue.length) {
      const nxt = [];
      for (const q of queue) {
        const nexts = hash.get(q);
        for (const next of nexts || []) {
          if (visited[next]) continue;
          visited[next] = true;
          nxt.push(next);
          res++;
        }
      }
      queue = nxt;
    }
    ans = Math.max(res, ans);
  }
  return ans;
};
/**
 * @description 获取两点之间的距离
 * @param {number[]} p1
 * @param {number[]} p2
 * @returns {number}
 */
function getDistance(p1, p2) {
  return Math.sqrt(
    Math.pow(Math.abs(p1[0] - p2[0]), 2) + Math.pow(Math.abs(p1[1] - p2[1]), 2)
  );
}

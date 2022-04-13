/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-13 09:37:30                                                  *
 * @LastModifiedDate: 2022-04-13 11:13:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。
// 求最多有多少个点在同一条直线上。
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const len = points.length;
  if (len <= 2) {
    return len;
  }
  points.sort((a, b) => a[0] - b[0]);
  // 记录已经得到的斜率
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
      let cur = 2;
      // if (set.has(slope)) {
      //   continue;
      // } else {
      for (let k = 0; k < len; k++) {
        if (k == i || k == j) {
          continue;
        }
        let slope2 =
          (points[k][1] - points[i][1]) / (points[k][0] - points[i][0]);
        if (slope2 == slope) {
          cur++;
        }
      }
      // set.set(slope, cur);
      ans = Math.max(ans, cur);
      // }
    }
  }
  return ans;
};
// 上述解答

// 选取2个点的方式：C(2,len)

// 600 * 599 * 598 * 2

// 300 * 299 *
maxPoints([
  [0, 0],
  [4, 5],
  [7, 8],
  [8, 9],
  [5, 6],
  [3, 4],
  [1, 1],
]);

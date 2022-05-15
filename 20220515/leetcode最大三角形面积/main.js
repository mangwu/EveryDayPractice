/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-15 19:09:49                                                  *
 * @LastModifiedDate: 2022-05-15 19:32:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

// 示例:
// 输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// 输出: 2
// 解释:
// 这五个点如下图所示。组成的橙色三角形是最大的，面积为2。

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  // 暴力解法
  const n = points.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let area = getAreas(points[i], points[j], points[k]);
        if (!isNaN(area)) {
          ans = Math.max(ans, area);
        }
      }
    }
  }
  return ans;
};

// 通过三条边计算得出面积
const getAreas = (p1, p2, p3) => {
  let len1 = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  let len2 = Math.sqrt(Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2));
  let len3 = Math.sqrt(Math.pow(p3[0] - p2[0], 2) + Math.pow(p3[1] - p2[1], 2));
  // 计算半周长
  let p = (len1 + len2 + len3) / 2;
  return Math.sqrt(p * (p - len1) * (p - len2) * (p - len3));
};
largestTriangleArea([
  [35, -23],
  [-12, -48],
  [-34, -40],
  [21, -25],
  [-35, -44],
  [24, 1],
  [16, -9],
  [41, 4],
  [-36, -49],
  [42, -49],
  [-37, -20],
  [-35, 11],
  [-2, -36],
  [18, 21],
  [18, 8],
  [-24, 14],
  [-23, -11],
  [-8, 44],
  [-19, -3],
  [0, -10],
  [-21, -4],
  [23, 18],
  [20, 11],
  [-42, 24],
  [6, -19],
]);

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-08 10:48:11                                                  *
 * @LastModifiedDate: 2022-07-08 10:58:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 某区域地图记录在 k 二维数组 area，其中 0 表示空地，1 表示快递分发点。

// 若希望选取一个地点设立中转站，使得中转站至各快递分发点的「曼哈顿距离」总和最小。
// 请返回这个 最小 的距离总和。

// 注意：

// 曼哈顿距离：distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|
// 所有位置均可作为快递中转站的设立点。

/**
 * @param {number[][]} area
 * @return {number}
 */
var buildTransferStation = function (area) {
  // 获取每个是1的快递分发点
  const ones = [];
  const m = area.length;
  const n = area[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (area[i][j] == 1) {
        ones.push([i, j]);
      }
    }
  }
  if (ones.length == 2) {
    return (
      Math.abs(ones[0][0] - ones[1][0]) + Math.abs(ones[0][1] - ones[1][1])
    );
  }
  let ans = Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0;
      for (const one of ones) {
        cur += Math.abs(one[0] - i) + Math.abs(one[1] - j);
      }
      ans = Math.min(ans, cur);
    }
  }
  return ans;
};

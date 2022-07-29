/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-29 09:05:32                                                  *
 * @LastModifiedDate: 2022-07-29 10:33:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。

// 点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。

// 一个 有效的正方形 有四条等边和四个等角(90度角)。

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  // 4个点的构成的四个边长度相等即可
  // 或者四个边相互垂直且边长相等
  // 首先要获取四个边,有三种取向
  // 1 - 2 2 - 3 3 - 4 4 - 1
  let edge1 = [p2[0] - p1[0], p2[1] - p1[1]];
  let edge2 = [p2[0] - p3[0], p2[1] - p3[1]];
  let edge3 = [p4[0] - p3[0], p4[1] - p3[1]];
  let edge4 = [p4[0] - p1[0], p4[1] - p1[1]];
  if (
    crossMulti(edge1, edge2) &&
    crossMulti(edge2, edge3) &&
    crossMulti(edge3, edge4) &&
    crossMulti(edge1, edge4) &&
    computeLength(edge1) == computeLength(edge2)
  ) {
    return true;
  }
  // 1 - 2 2 - 4 4 - 3 3 - 1
  edge1 = [p2[0] - p1[0], p2[1] - p1[1]];
  edge2 = [p2[0] - p4[0], p2[1] - p4[1]];
  edge3 = [p4[0] - p3[0], p4[1] - p3[1]];
  edge4 = [p3[0] - p1[0], p3[1] - p1[1]];
  if (
    crossMulti(edge1, edge2) &&
    crossMulti(edge2, edge3) &&
    crossMulti(edge3, edge4) &&
    crossMulti(edge1, edge4) &&
    computeLength(edge1) == computeLength(edge2)
  ) {
    return true;
  }
  // 1 - 3 3 - 2 2 - 4 4 - 1
  edge1 = [p3[0] - p1[0], p3[1] - p1[1]];
  edge2 = [p2[0] - p3[0], p2[1] - p3[1]];
  edge3 = [p4[0] - p2[0], p4[1] - p2[1]];
  edge4 = [p4[0] - p1[0], p4[1] - p1[1]];
  if (
    crossMulti(edge1, edge2) &&
    crossMulti(edge2, edge3) &&
    crossMulti(edge3, edge4) &&
    crossMulti(edge1, edge4) &&
    computeLength(edge1) == computeLength(edge2)
  ) {
    return true;
  }
  return false;
};

// 点乘等于0就是垂直
/**
 * @description 判断是否垂直
 * @param {number[]} edge1 向量1
 * @param {number[]} edge2 向量2
 * @returns {Boolean}
 */
var crossMulti = (edge1, edge2) => {
  // 不能是0向量
  if (edge1[0] == 0 && edge1[1] == 0) {
    return false;
  }
  if (edge2[0] == 0 && edge2[1] == 0) {
    return false;
  }
  return edge1[0] * edge2[0] + edge1[1] * edge2[1] == 0;
};

// 计算边长
var computeLength = (edge) => {
  return Math.pow(edge[0], 2) + Math.pow(edge[1], 2);
};

// 1 - 2 2 - 3 3 - 4 4 - 1
// 1 - 2 2 - 4 4 - 3 3 - 1
// 1 - 3 3 - 2 2 - 4 4 - 1

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  // 获取6条边
  // 4条边，两条对角线
  // 计算6条边的长度
  // 排序，前4条应该相等且不等于0
  // 后2条相等，则表明是正方形
  let edge1 = [p2[0] - p1[0], p2[1] - p1[1]];
  let edge2 = [p2[0] - p3[0], p2[1] - p3[1]];
  let edge3 = [p4[0] - p3[0], p4[1] - p3[1]];
  let edge4 = [p4[0] - p1[0], p4[1] - p1[1]];
  let edge5 = [p1[0] - p3[0], p1[1] - p3[1]];
  let edge6 = [p2[0] - p4[0], p2[1] - p4[1]];
  const lens = new Array(6);
  lens[0] = computeLength(edge1);
  lens[1] = computeLength(edge2);
  lens[2] = computeLength(edge3);
  lens[3] = computeLength(edge4);
  lens[4] = computeLength(edge5);
  lens[5] = computeLength(edge6);
  lens.sort((a, b) => a - b);
  return (
    lens[0] == lens[1] &&
    lens[0] == lens[2] &&
    lens[0] == lens[3] &&
    lens[0] !== 0 &&
    lens[4] == lens[5]
  );
};

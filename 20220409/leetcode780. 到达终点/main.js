/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-09 19:27:58                                                  *
 * @LastModifiedDate: 2022-04-09 22:59:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定四个整数 sx , sy ，tx 和 ty，
// 如果通过一系列的转换可以从起点 (sx, sy) 到达终点 (tx, ty)，
// 则返回 true，否则返回 false。

// 从点 (x, y) 可以转换到 (x, x+y)  或者 (x+y, y)。

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  // 转化后，要么是2x+y ，要么是x+2y，每次在x增加一个y或者在y增加一个x
  // 因为x,y都是正数。所以不必考虑负数情况
  // 因为每次转换x+y都会变大，所以tx和ty之和一定大于sx和sy
  if (tx + ty < sx + sy) {
    return false;
  }
  if (tx + ty == sx + sy) {
    if (tx == sx) {
      return true;
    } else {
      return false;
    }
  }
  // 剩下的情况就是sx+sy必然大于tx+ty
  // 考虑单个情况，sx + sy < tx + ty
  // 如果sx >= tx那么 必然 sy < ty
  // 想要达到(tx,ty),此时也无法达到，所以必有sx > tx;sy > ty
  if (sx > tx || sy > ty) {
    return false;
  }
  // 动态规划
  const dp = [[[sx, sy]]];
  // 遍历次数
  let n = Math.max(
    Math.floor((tx - sx) / sy) + 1,
    Math.floor(ty - sy / sx) + 1
  );
  console.log(n);
  for (let i = 1; i < n; i++) {
    const cur = [];
    for (const ele of dp[i - 1]) {
      const newTuple = [ele[0] + ele[1], ele[1]];
      const newTuple2 = [ele[0], ele[0] + ele[1]];
      if (newTuple[0] == tx && newTuple[1] == ty) {
        return true;
      }
      if (newTuple2[0] == tx && newTuple2[1] == ty) {
        return true;
      }
      cur.push(newTuple);
      cur.push(newTuple2);
      dp[i] = cur;
    }
    console.log(cur);
  }
  return false;
};
reachingPoints(2, 3, 25, 46);
// 上面动态规划的答案只适用于tx和ty距离sx和sy比较小的时候

// 反向计算
// 值大的一定是上一轮的x+y, 通过本次的a,b a -b 就能得出 上一轮的y和x，依次类推

var reachingPoints = function (sx, sy, tx, ty) {
  while (tx > sx && ty > sy && tx !== ty) {
    if (tx > ty) {
      // tx比ty大，tx由x+ny组成
      tx = tx % ty;
    } else {
      // ty比tx大，ty由nx+y组成
      ty = ty % tx;
    }
  }
  // 因为设定tx !== ty (如果结果相同，那么会导致循环后变为0)
  if (tx == sx && ty == sy) {
    return true;
  } else if (tx == sx && ty > sy) {
    // 如果tx==sx 说明没经历过循环，可能形如x , nx + y的形式
    ty = (ty - sy) % sx;
    return ty == 0;
  } else if (ty == sy && tx > sx) {
    tx = (tx - sx) % sy;
    return tx == 0;
  }
  return false;
};

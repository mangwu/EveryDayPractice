/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-24 15:34:32                                                  *
 * @LastModifiedDate: 2022-08-24 15:56:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

// 给定整数 capacity 和一个数组 trips ,
// trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，
// 接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。

// 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  // 构造from to之间每个乘客的数量
  const distances = new Array(1001).fill(0);
  for (const [numPassengersi, from, to] of trips) {
    for (let i = from; i <= to; i++) {
      distances[i] += numPassengersi;
      if (distances[i] > capacity) {
        return false;
      }
    }
  }
  return true;
};

// 差分数组
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  // 构造from to之间每个乘客的数量
  const diff = new Array(1001).fill(0);
  for (const [numPassengersi, from, to] of trips) {
    diff[from] += numPassengersi;
    diff[to] -= numPassengersi;
  }
  for (let i = 0; i <= 1001; i++) {
    if (i) diff[i] += diff[i - 1];
    if (diff[i] > capacity) {
      return false;
    }
  }
  return true;
};

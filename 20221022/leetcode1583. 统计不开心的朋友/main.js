/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-22 20:45:44                                                  *
 * @LastModifiedDate: 2022-10-22 22:40:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一份 n 位朋友的亲近程度列表，其中 n 总是 偶数 。

// 对每位朋友 i，preferences[i] 包含一份 按亲近程度从高到低排列 的朋友列表。
// 换句话说，排在列表前面的朋友与 i 的亲近程度比排在列表后面的朋友更高。
// 每个列表中的朋友均以 0 到 n-1 之间的整数表示。

// 所有的朋友被分成几对，配对情况以列表 pairs 给出，
// 其中 pairs[i] = [xi, yi] 表示 xi 与 yi 配对，且 yi 与 xi 配对。

// 但是，这样的配对情况可能会使其中部分朋友感到不开心。
// 在 x 与 y 配对且 u 与 v 配对的情况下，如果同时满足下述两个条件，x 就会不开心：

// x 与 u 的亲近程度胜过 x 与 y，且
// u 与 x 的亲近程度胜过 u 与 v
// 返回 不开心的朋友的数目 。

/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const preference = preferences[i];
    const arr = [];
    for (let j = 0; j < n - 1; j++) {
      arr[preference[j]] = n - j;
    }
    preferences[i] = arr;
  }
  for (const [x, y] of pairs) {
    ans += unhappyNum(x, y, preferences, pairs);
  }
  return ans;
};

var unhappyNum = function (x, y, preferences, pairs) {
  let xy = preferences[x][y];
  let yx = preferences[y][x];
  let xUnhappy = false;
  let yUnhappy = false;
  for (const [i, j] of pairs) {
    if (i !== x && y !== j) {
      if (!xUnhappy) {
        // x与i的亲近程度大于 x与y
        // i与x的亲近程度大于 i与j
        let xi = preferences[x][i];
        let ix = preferences[i][x];
        let ij = preferences[i][j];
        if (xi > xy && ix > ij) {
          xUnhappy = true;
        }
        // x与j的亲近程度大于 x与y
        // j与x的亲近程度大于 j与i
        let xj = preferences[x][j];
        let jx = preferences[j][x];
        let ji = preferences[j][i];
        if (xj > xy && jx > ji) {
          xUnhappy = true;
        }
      }
      if (!yUnhappy) {
        // y与i的亲近程度大于 y与x
        // i与y的亲近程度大于 i与j
        let yi = preferences[y][i];
        let iy = preferences[i][y];
        let ij = preferences[i][j];
        if (yi > yx && iy > ij) {
          yUnhappy = true;
        }
        // y与j的亲近程度大于 y与x
        // j与y的亲近程度大于 j与i
        let yj = preferences[y][j];
        let jy = preferences[j][y];
        let ji = preferences[j][i];
        if (yj > yx && jy > ji) {
          yUnhappy = true;
        }
      }
      if (xUnhappy && yUnhappy) {
        break;
      }
    }
  }
  return xUnhappy + yUnhappy;
};

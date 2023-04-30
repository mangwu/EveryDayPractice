/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-30 19:31:35                                                  *
 * @LastModifiedDate: 2023-04-30 21:12:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 三枚石子放置在数轴上，位置分别为 a，b，c。

// 每一回合，你可以从两端之一拿起一枚石子（位置最大或最小），并将其放入两端之间的任一空闲位置。形式上，假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。那么就可以从位置 x 或者是位置 z 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。

// 当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。

// 要使游戏结束，你可以执行的最小和最大移动次数分别是多少？ 以长度为 2 的数组形式返回答案：answer = [minimum_moves, maximum_moves]

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
  // 最小移动次数一定是0 1 2 次
  // 最大移动次数需要计算
  // 先判断特殊情况
  const arr = [a, b, c].sort((x, y) => x - y);
  let min = 2;
  if (arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]) return [0, 0];
  if (
    arr[0] + 2 === arr[1] ||
    arr[1] + 2 === arr[2] ||
    arr[0] + 1 === arr[1] ||
    arr[1] + 1 === arr[2]
  ) {
    min = 1;
  }
  // 最大移动:
  // 为了获取最大移动结果，需要贪心地制造出区间每次只缩减一个距离的情况，即和
  let max = arr[2] - arr[1] + arr[1] - arr[0] - 2;
  return [min, max];
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-21 21:14:19                                                  *
 * @LastModifiedDate: 2022-12-21 21:55:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 你正在玩一个单人游戏，面前放置着大小分别为 a​​​​​​、b 和 c​​​​​​ 的 三堆 石子。

// 每回合你都要从两个 不同的非空堆 中取出一颗石子，并在得分上加 1 分。当存在 两个或更多 的空堆时，游戏停止。

// 给你三个整数 a 、b 和 c ，返回可以得到的 最大分数 。
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  if (a > b || b > c || a > c) {
    return maximumScore(...[a, b, c].sort((x, y) => x - y));
  }
  // a <= b <= c
  if (a + b <= c) {
    return a + b;
  }
  // 最小的a进行分配
  let sub = c - b;
  if (a > sub) {
    let average = Math.ceil((a - sub) / 2);
    return a + b - average;
  } else {
    return a + b;
  }
};

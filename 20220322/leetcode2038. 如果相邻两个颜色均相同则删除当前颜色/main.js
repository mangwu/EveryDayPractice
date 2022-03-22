/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-22 14:15:57                                                  *
 * @LastModifiedDate: 2022-03-22 14:40:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 总共有 n 个颜色片段排成一列，每个颜色片段要么是 'A' 要么是 'B' 。
// 给你一个长度为 n 的字符串 colors ，其中 colors[i] 表示第 i 个颜色片段的颜色。

// Alice 和 Bob 在玩一个游戏，他们 轮流 从这个字符串中删除颜色。Alice 先手 。

// 如果一个颜色片段为 'A' 且 相邻两个颜色 都是颜色 'A' ，那么 Alice 可以删除该颜色片段。
// Alice 不可以 删除任何颜色 'B' 片段。
// 如果一个颜色片段为 'B' 且 相邻两个颜色 都是颜色 'B' ，那么 Bob 可以删除该颜色片段。
// Bob 不可以 删除任何颜色 'A' 片段。
// Alice 和 Bob 不能 从字符串两端删除颜色片段。
// 如果其中一人无法继续操作，则该玩家 输 掉游戏且另一玩家 获胜 。
// 假设 Alice 和 Bob 都采用最优策略，如果 Alice 获胜，请返回 true，否则 Bob 获胜，返回 false。

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  // 遍历一遍colors找出连续的3A和3B
  const len = colors.length;
  if (len <= 2) {
    return false;
  }
  let a3 = 0;
  let b3 = 0;
  for (let i = 1; i <= len - 2; i++) {
    if (colors[i] == "A") {
      if (colors[i - 1] == "A" && colors[i + 1] == "A") {
        a3++;
        console.log(i);
      }
    } else {
      if (colors[i - 1] == "B" && colors[i + 1] == "B") {
        b3++;
      }
    }
  }
  // console.log(a3, b3);
  return a3 > b3;
};
winnerOfGame("AABABAAAABBB");

// 简单计数,可以不用每次比较相邻的字符,使用一个变量记住连续字符的个数,当它大于三时就可以更新可选的操作数了

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  // 遍历一遍colors找出连续的3A和3B
  const len = colors.length;
  if (len <= 2) {
    return false;
  }
  let a3 = 0;
  let b3 = 0;
  let cnt = 1;
  let cur = "C";
  for (let i = 0; i < len; i++) {
    if (colors[i] !== cur) {
      cnt = 1;
      cur = colors[i];
    } else {
      cnt++;
      if (cnt >= 3) {
        if (cur == "A") {
          a3++;
        } else {
          b3++;
        }
      }
    }
  }
  return a3 > b3;
};

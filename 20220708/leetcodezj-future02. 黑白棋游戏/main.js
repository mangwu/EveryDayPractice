/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-08 10:32:57                                                  *
 * @LastModifiedDate: 2022-07-08 10:47:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有一个黑白棋游戏，初始时给出一排棋子，记作数组 chess，
// 其中白色棋子记作 0，黑色棋子记作 1。用户可以每次交换 任意位置 的两颗棋子的位置。

// 为了使得所有黑色棋子相连，请返回最少需要交换多少次。

/**
 * @param {number[]} chess
 * @return {number}
 */
var minSwaps = function (chess) {
  // 滑动窗口
  // 先计算出黑子的数量
  let black = 0;
  const n = chess.length;
  for (const ch of chess) {
    if (ch == 1) {
      black++;
    }
  }
  let ans;
  let white = 0;
  for (let i = 0; i < black; i++) {
    if (chess[i] == 0) {
      white++;
    }
  }
  ans = white;
  // 进行滑动，取最小值
  // 不用保存滑动窗口，直接左右指针
  for (let i = black; i < n; i++) {
    if (chess[i] == 0) {
      white++;
    }
    if (chess[i - black] == 0) {
      white--;
    }
    ans = Math.min(ans, white);
  }
  return ans;
};

// [1,0,1,0,1,0,1,1,1,0,0,1,0,0,1]

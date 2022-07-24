/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-23 23:19:39                                                  *
 * @LastModifiedDate: 2022-07-23 23:38:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 rolls 和一个整数 k 。
// 你扔一个 k 面的骰子 n 次，骰子的每个面分别是 1 到 k ，其中第 i 次扔得到的数字是 rolls[i] 。

// 请你返回 无法 从 rolls 中得到的 最短 骰子子序列的长度。

// 扔一个 k 面的骰子 len 次得到的是一个长度为 len 的 骰子子序列 。

// 注意 ，子序列只需要保持在原数组中的顺序，不需要连续。

/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function (rolls, k) {
  // 遍历rolls得到结果
  const n = rolls.length;
  if (n < k) {
    return 1;
  }
  const cur = new Array(k).fill(0).map((v, i) => [i + 1]);
};

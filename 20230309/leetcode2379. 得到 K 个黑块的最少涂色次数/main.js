/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-09 08:57:54                                                  *
 * @LastModifiedDate: 2023-03-09 09:04:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。

// 给你一个整数 k ，表示想要 连续 黑色块的数目。

// 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

// 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // 滑动窗口
  let w = 0;
  let b = 0;
  const n = blocks.length;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") w++;
    else b++;
  }
  let res = w;
  for (let i = k; i < n; i++) {
    if (blocks[i] === "W") w++;
    else b++;
    if (blocks[i - k] === "W") w--;
    else b--;
    res = Math.min(res, w);
  }
  return res;
};

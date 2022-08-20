/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-20 22:30:17                                                  *
 * @LastModifiedDate: 2022-08-20 22:36:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，
// 表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。

// 给你一个整数 k ，表示想要 连续 黑色块的数目。

// 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

// 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  // 连续的B
  const n = blocks.length;
  // 滑动窗口
  let left = 0;
  let right = k;
  let w = 0;
  let b = 0;
  for (let i = left; i < right; i++) {
    if (blocks[i] == "B") {
      b++;
    } else {
      w++;
    }
  }
  let ans = w;
  while (right < n) {
    if (blocks[right] == "B") {
      b++;
    } else {
      w++;
    }
    if (blocks[left] == "B") {
      b--;
    } else {
      w--;
    }
    ans = Math.min(ans, w);
    right++;
    left++;
  }
  return ans;
};

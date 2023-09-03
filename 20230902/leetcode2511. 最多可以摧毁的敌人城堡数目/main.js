/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-02 23:36:51                                                  *
 * @LastModifiedDate: 2023-09-02 23:44:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n ，下标从 0 开始的整数数组 forts ，表示一些城堡。forts[i] 可以是 -1 ，0 或者 1 ，其中：

// -1 表示第 i 个位置 没有 城堡。
// 0 表示第 i 个位置有一个 敌人 的城堡。
// 1 表示第 i 个位置有一个你控制的城堡。
// 现在，你需要决定，将你的军队从某个你控制的城堡位置 i 移动到一个空的位置 j ，满足：

// 0 <= i, j <= n - 1
// 军队经过的位置 只有 敌人的城堡。正式的，对于所有 min(i,j) < k < max(i,j) 的 k ，都满足 forts[k] == 0 。
// 当军队移动时，所有途中经过的敌人城堡都会被 摧毁 。

// 请你返回 最多 可以摧毁的敌人城堡数目。如果 无法 移动你的军队，或者没有你控制的城堡，请返回 0 。

/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  // 1 , -1之间0的最大个数
  const n = forts.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (forts[i] === 1) {
      for (let j = i + 1; j < n; j++) {
        if (forts[j] === -1) {
          res = Math.max(j - i - 1, res);
          break;
        } else if (forts[j] === 1) {
          break;
        }
      }
      for (let j = i - 1; j >= 0; j--) {
        if (forts[j] === -1) {
          res = Math.max(i - j - 1, res);
          break;
        } else if (forts[j] === 1) {
          break;
        }
      }
    }
  }
  return res;
};

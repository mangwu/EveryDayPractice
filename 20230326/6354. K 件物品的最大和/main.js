/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-26 10:30:34                                                  *
 * @LastModifiedDate: 2023-03-26 10:36:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 袋子中装有一些物品，每个物品上都标记着数字 1 、0 或 -1 。

// 给你四个非负整数 numOnes 、numZeros 、numNegOnes 和 k 。

// 袋子最初包含：

// numOnes 件标记为 1 的物品。
// numZeroes 件标记为 0 的物品。
// numNegOnes 件标记为 -1 的物品。
// 现计划从这些物品中恰好选出 k 件物品。返回所有可行方案中，物品上所标记数字之和的最大值。

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let res = 0;
  while (k) {
    if (numOnes) {
      if (k <= numOnes) {
        res += k;
        break;
      } else {
        res += numOnes;
        k -= numOnes;
        numOnes = 0;
      }
    }
    if (numZeros) {
      if (k <= numZeros) {
        break;
      } else {
        k -= numZeros;
        numZeros = 0;
      }
    }
    if (numNegOnes) {
      res -= k;
      break;
    }
  }
  return res;
};

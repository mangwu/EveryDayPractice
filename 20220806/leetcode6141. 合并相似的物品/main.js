/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-06 22:30:23                                                  *
 * @LastModifiedDate: 2022-08-06 22:34:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个二维整数数组 items1 和 items2 ，表示两个物品集合。每个数组 items 有以下特质：

// items[i] = [valuei, weighti] 其中 valuei 表示第 i 件物品的 价值 ，
// weighti 表示第 i 件物品的 重量 。
// items 中每件物品的价值都是 唯一的 。
// 请你返回一个二维数组 ret，其中 ret[i] = [valuei, weighti]，
// weighti 是所有价值为 valuei 物品的 重量之和 。

// 注意：ret 应该按价值 升序 排序后返回。

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const hash = new Map();
  for (const item of items1) {
    hash.set(item[0], item[1]);
  }
  for (const item of items2) {
    if (hash.has(item[0])) {
      let w = hash.get(item[0]);
      hash.set(item[0], w + item[1]);
    } else {
      hash.set(item[0], item[1]);
    }
  }
  const ans = [...hash].sort((a, b) => a[0] - b[0]);
  return ans;
};

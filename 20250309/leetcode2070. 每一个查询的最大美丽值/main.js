/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-09 23:01:09                                                  *
 * @LastModifiedDate: 2025-03-09 23:19:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 items ，其中 items[i] = [pricei, beautyi] 分别表示每一个物品的 价格 和 美丽值 。

// 同时给你一个下标从 0 开始的整数数组 queries 。对于每个查询 queries[j] ，你想求出价格小于等于 queries[j] 的物品中，最大的美丽值 是多少。如果不存在符合条件的物品，那么查询的结果为 0 。

// 请你返回一个长度与 queries 相同的数组 answer，其中 answer[j]是第 j 个查询的答案。

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  const n = items.length;
  // 排序
  items.sort((a, b) => a[0] - b[0]); // 按照价格排序
  let curBeauty = 0;
  const maxBeauties = [];
  for (const [_, b] of items) {
    curBeauty = Math.max(curBeauty, b);
    maxBeauties.push(curBeauty);
  }
  const binarySearch = (target) => {
    // 找到最后一个小于等于target的索引
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const price = items[mid][0];
      if (price > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };
  const ans = [];
  for (const query of queries) {
    const idx = binarySearch(query);
    if (idx < 0) ans.push(0);
    else ans.push(maxBeauties[idx]);
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-07 11:19:45                                                  *
 * @LastModifiedDate: 2023-05-07 11:43:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、长度为 n 的数组 nums 。一开始，所有元素都是 未染色 （值为 0 ）的。

// 给你一个二维整数数组 queries ，其中 queries[i] = [indexi, colori] 。

// 对于每个操作，你需要将数组 nums 中下标为 indexi 的格子染色为 colori 。

// 请你返回一个长度与 queries 相等的数组 answer ，其中 answer[i]是前 i 个操作 之后 ，相邻元素颜色相同的数目。

// 更正式的，answer[i] 是执行完前 i 个操作后，0 <= j < n - 1 的下标 j 中，满足 nums[j] == nums[j + 1] 且 nums[j] != 0 的数目。

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
  const ans = [];
  const origin = new Array(n).fill(0);
  let cur = 0;
  const hash = new Map();
  for (const query of queries) {
    const [index, color] = query;
    const o = origin[index];
    if (o === 0) {
      // 新增颜色
      if (hash.has(color)) {
        const colors = hash.get(color);
      } else {
        hash.set(color, [[index, index]]);
      }
    } else {
    }
  }
};

// var binary



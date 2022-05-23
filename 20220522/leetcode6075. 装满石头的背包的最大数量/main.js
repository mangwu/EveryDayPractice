/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-22 10:33:50                                                  *
 * @LastModifiedDate: 2022-05-22 10:46:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现有编号从 0 到 n - 1 的 n 个背包。给你两个下标从 0 开始的整数数组 capacity 和 rocks 。
// 第 i 个背包最大可以装 capacity[i] 块石头，当前已经装了 rocks[i] 块石头。
// 另给你一个整数 additionalRocks ，表示你可以放置的额外石头数量，石头可以往 任意 背包中放置。

// 请你将额外的石头放入一些背包中，并返回放置后装满石头的背包的 最大 数量。

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  const n = capacity.length;
  const rest = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    // 每个背包还可以装下的个数
    rest[i] = capacity[i] - rocks[i];
  }
  rest.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n && additionalRocks > 0; i++) {
    if (rest[i] <= additionalRocks) {
      additionalRocks -= rest[i];
      rest[i] = 0;
    } else {
      additionalRocks = 0;
    }
    if (rest[i] == 0) {
      ans++;
    }
  }
  return ans;
};


// 0 1 1 2 1 1 5 1 7 2
// 0 1 1 1 1 1 2 2 5 7
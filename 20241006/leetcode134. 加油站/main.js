/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-06 22:56:02                                                  *
 * @LastModifiedDate: 2024-10-07 02:43:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  for (let i = 0; i < n; i++) {
    if (gas[i] >= cost[i]) {
      // 可以作为起始点开始
      let curGas = gas[i];
      let curCost = cost[i];
      let j = (i + 1) % n;
      while (curGas >= curCost && j !== i) {
        curGas += gas[j];
        curCost += cost[j];
        j = (j + 1) % n;
      }
      if (i === j && curGas >= curCost) return i;
      if (j > i) i = j - 1;
      else break;
    }
  }
  return -1;
};

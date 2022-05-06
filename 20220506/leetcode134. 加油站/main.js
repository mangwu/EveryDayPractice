/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-06 09:15:23                                                  *
 * @LastModifiedDate: 2022-05-06 14:41:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。
// 你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。
// 如果存在解，则 保证 它是 唯一 的。

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const len = gas.length;
  // // 如果len等于1，那么无需花费(还是需要花费，相当于从一个加油站 => 同一个加油站)
  // if (len == 1) {
  //   return 0;
  // }
  // 首先要保证cost之和要少于等于gas之和，否则一定会无法环绕到达终点
  let sumGas = 0;
  const sub = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    sumGas += gas[i];
    sub[i] = gas[i];
  }
  for (let i = 0; i < len; i++) {
    sumGas -= cost[i];
    sub[i] -= cost[i];
  }
  if (sumGas < 0) {
    return -1;
  }
  let ans = -1;
  let idx = 0;
  // 开始的一站一定是汽油大于等于对应花费的一站，否则刚开始就无法启航
  while (idx < len) {
    if (sub[idx] >= 0) {
      // 有成为开始站点的可能
      let sum = 0;
      let start = idx;
      while (sum >= 0 && idx < len) {
        // 后面的所有和值都大于等于0
        sum += sub[idx];
        idx++;
      }
      if (idx == len) {
        ans = start;
        break;
      } else {
        idx--;
      }
    }
    idx++;
  }
  return ans;
};

// [5,5,2,1,4]
// [6,7,1,1,2]
// [-1,-2,1,0,2]

// [1,2,3,4,5]
// [3,4,5,1,2]
// [-2,-2,-2,3,3];
// [-2,-4,-6,-3,0];

// [7,6,2,1,5,6,3,8]
// [5,9,1,3,2,8,1,9]
// [2,-3,1,-2,3,-2,2,-1]
// [2,-1,0,-2,3,1,3,2];
// 选择前缀和中后面全是非负数的

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 1. 只有开始的一站一定是汽油大于等于对应花费的一站，否则刚开始就无法启航
  // 2. 选定一个可以开始的站点后，开始启航，如果遇到gas不足的情况，中间的任何一个节点都会遇到同样的情况
  // 先判断
  const len = gas.length;
  // 首先要保证cost之和要少于等于gas之和，否则一定会无法环绕到达终点
  let sumGas = 0;
  for (let i = 0; i < len; i++) {
    sumGas += gas[i];
  }
  for (let i = 0; i < len; i++) {
    sumGas -= cost[i];
  }
  if (sumGas < 0) {
    return -1;
  }
  // 开始选择起点
  let idx = 0;
  while (idx < len) {
    if (gas[idx] >= cost[idx]) {
      // 可能的起点
      let start = idx;
      let sum = 0;
      while (sum >= 0 && idx < len) {
        sum = sum + gas[idx] - cost[idx];
        idx++;
      }
      if (idx == len) {
        return start;
      } else {
        idx--;
      }
    }
    idx++;
  }
  return -1;
};

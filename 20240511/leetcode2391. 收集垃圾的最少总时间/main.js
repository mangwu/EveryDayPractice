/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-11 22:30:18                                                  *
 * @LastModifiedDate: 2024-05-11 23:45:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串数组 garbage ，其中 garbage[i] 表示第 i 个房子的垃圾集合。garbage[i] 只包含字符 'M' ，'P' 和 'G' ，但可能包含多个相同字符，每个字符分别表示一单位的金属、纸和玻璃。垃圾车收拾 一 单位的任何一种垃圾都需要花费 1 分钟。

// 同时给你一个下标从 0 开始的整数数组 travel ，其中 travel[i] 是垃圾车从房子 i 行驶到房子 i + 1 需要的分钟数。

// 城市里总共有三辆垃圾车，分别收拾三种垃圾。每辆垃圾车都从房子 0 出发，按顺序 到达每一栋房子。但它们 不是必须 到达所有的房子。

// 任何时刻只有 一辆 垃圾车处在使用状态。当一辆垃圾车在行驶或者收拾垃圾的时候，另外两辆车 不能 做任何事情。

// 请你返回收拾完所有垃圾需要花费的 最少 总分钟数。

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  const n = garbage.length;
  // M P G
  let res = 0;
  let m = -1;
  let p = -1;
  let g = -1;
  for (let i = 0; i < n; i++) {
    for (const ch of garbage[i]) {
      if (ch === "m") {
        m = i;
      } else if (ch === "p") {
        p = i;
      } else g = i;
    }
    res += garbage[i].length;
  }
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += travel[i];
    if (m === i + 1) res += sum;
    if (p === i + 1) res += sum;
    if (g === i + 1) res += sum;
  }
  return res;
};


// 8 + 3 + 13 + 13
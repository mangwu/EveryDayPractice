/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-28 11:02:45                                                  *
 * @LastModifiedDate: 2022-08-28 11:17:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串数组 garbage ，其中 garbage[i] 表示第 i 个房子的垃圾集合。
// garbage[i] 只包含字符 'M' ，'P' 和 'G' ，但可能包含多个相同字符，
// 每个字符分别表示一单位的金属、纸和玻璃。垃圾车收拾 一 单位的任何一种垃圾都需要花费 1 分钟。

// 同时给你一个下标从 0 开始的整数数组 travel ，
// 其中 travel[i] 是垃圾车从房子 i 行驶到房子 i + 1 需要的分钟数。

// 城市里总共有三辆垃圾车，分别收拾三种垃圾。每辆垃圾车都从房子 0 出发，
// 按顺序 到达每一栋房子。但它们 不是必须 到达所有的房子。

// 任何时刻只有 一辆 垃圾车处在使用状态。当一辆垃圾车在行驶或者收拾垃圾的时候，
// 另外两辆车 不能 做任何事情。

// 请你返回收拾完所有垃圾需要花费的 最少 总分钟数。

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  // 分别表示需要到达最后哪一家时后面没有对应的M，P，G垃圾
  let MPG = new Array(3).fill(0);
  const n = garbage.length;
  for (let i = 0; i < n; i++) {
    const hash = new Map();
    for (const ch of garbage[i]) {
      hash.has(ch) ? hash.set(ch, hash.get(ch) + 1) : hash.set(ch, 1);
    }
    // 更新MPG
    if (hash.has("M")) {
      MPG[0] = i;
    }
    if (hash.has("P")) {
      MPG[1] = i;
    }
    if (hash.has("G")) {
      MPG[2] = i;
    }
    // 更新garbage
    garbage[i] = hash;
  }
  let ans = 0;
  for (let i = 0; i < 3; i++) {
    let ch = i == 0 ? "M" : i == 1 ? "P" : "G";
    for (let j = 0; j <= MPG[i]; j++) {
      if (garbage[j].has(ch)) {
        // 花费时间
        ans += garbage[j].get(ch);
      }
      if (j !== MPG[i]) {
        // 不是最后一个
        ans += travel[j];
      }
    }
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-30 11:01:01                                                  *
 * @LastModifiedDate: 2022-03-30 17:06:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有 k 个服务器，编号为 0 到 k-1 ，它们可以同时处理多个请求组。每个服务器有无穷的计算能力但是 不能同时处理超过一个请求 。请求分配到服务器的规则如下：

// 第 i （序号从 0 开始）个请求到达。
// 如果所有服务器都已被占据，那么该请求被舍弃（完全不处理）。
// 如果第 (i % k) 个服务器空闲，那么对应服务器会处理该请求。
// 否则，将请求安排给下一个空闲的服务器（服务器构成一个环，必要的话可能从第 0 个服务器开始继续找下一个空闲的服务器）。比方说，如果第 i 个服务器在忙，那么会查看第 (i+1) 个服务器，第 (i+2) 个服务器等等。
// 给你一个 严格递增 的正整数数组 arrival ，表示第 i 个任务的到达时间，和另一个数组 load ，其中 load[i] 表示第 i 个请求的工作量（也就是服务器完成它所需要的时间）。你的任务是找到 最繁忙的服务器 。最繁忙定义为一个服务器处理的请求数是所有服务器里最多的。

// 请你返回包含所有 最繁忙服务器 序号的列表，你可以以任意顺序返回这个列表。
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
  // 需要一个数组保存所有服务器的状态
  // 初始时都是0
  //
  let state = new Array(k).fill(0).map((v) => [v, new Set()]);
  const len = arrival.length;
  let ans = [];
  let max = 0;
  let pre = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < k; j++) {
      if (state[j][0] > 0) {
        state[j][0]--;
      }
    }
    let hasServer = false;

    for (let j = pre; j < k + pre; j++) {
      const newJ = j % k;
      if (state[newJ][0] == 0) {
        pre = newJ + 1;
        state[newJ][0] = load[i];
        state[newJ][1].add(arrival[i]);
        if (state[newJ][1].size > max) {
          max = state[newJ][1].size;
          ans = [newJ];
        } else if (state[newJ][1].size == max) {
          ans.push(newJ);
        }
        hasServer = true;
        break;
      }
    }
    if (!hasServer) {
      pre = (pre + 1) % k;
    }
    console.log(state);
  }
  return ans;
};

busiestServers(2, [2, 3, 4, 8], [3, 2, 4, 3]);

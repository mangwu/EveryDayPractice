/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-04 22:43:37                                                  *
 * @LastModifiedDate: 2023-03-04 22:54:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 ranges ，其中 ranges[i] = [starti, endi] 表示 starti 到 endi 之间（包括二者）的所有整数都包含在第 i 个区间中。

// 你需要将 ranges 分成 两个 组（可以为空），满足：

// 每个区间只属于一个组。
// 两个有 交集 的区间必须在 同一个 组内。
// 如果两个区间有至少 一个 公共整数，那么这两个区间是 有交集 的。

// 比方说，区间 [1, 3] 和 [2, 5] 有交集，因为 2 和 3 在两个区间中都被包含。
// 请你返回将 ranges 划分成两个组的 总方案数 。由于答案可能很大，将它对 109 + 7 取余 后返回。

const MOD = 10 ** 9 + 7;
/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  // 如果所有组都是无交集的，则每个区间都有两种选择，答案就是2^n
  // 而有交集的组必须放在同一个区间，这些区间可以看成一个独立的区间
  // 计算出独立的区间数

  // 以第一个数大小进行排序
  ranges.sort((a, b) => a[0] - b[0]);
  const n = ranges.length;
  const res = [ranges[0]];
  for (let i = 1; i < n; i++) {
    let pre = res[res.length - 1];
    // 检测是否相交
    if (ranges[i][0] <= pre[1]) {
      pre[1] = Math.max(pre[1], ranges[i][1]);
    } else {
      // 不相交就是一个新的区间
      res.push(ranges[i]);
    }
  }
  let ans = 1;
  for (let i = 0; i < res.length; i++) {
    ans *= 2;
    ans %= MOD;
  }
  return ans;
};

// 570065479
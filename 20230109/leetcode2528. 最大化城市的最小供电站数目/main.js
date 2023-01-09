/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-09 11:30:18                                                  *
 * @LastModifiedDate: 2023-01-09 17:32:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的整数数组 stations ，其中 stations[i] 表示第 i 座城市的供电站数目。

// 每个供电站可以在一定 范围 内给所有城市提供电力。换句话说，如果给定的范围是 r ，在城市 i 处的供电站可以给所有满足 |i - j| <= r 且 0 <= i, j <= n - 1 的城市 j 供电。

// |x| 表示 x 的 绝对值 。比方说，|7 - 5| = 2 ，|3 - 10| = 7 。
// 一座城市的 电量 是所有能给它供电的供电站数目。

// 政府批准了可以额外建造 k 座供电站，你需要决定这些供电站分别应该建在哪里，这些供电站与已经存在的供电站有相同的供电范围。

// 给你两个整数 r 和 k ，如果以最优策略建造额外的发电站，返回所有城市中，最小供电站数目的最大值是多少。

// 这 k 座供电站可以建在多个城市。

/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function (stations, r, k) {
  // 综合练习题
  // 二分 、前缀和、差分数组
  // 前缀和：[1,2,1,2]  [0,1,3,4,6] 能把数组的一部分元素和转换为两个元素之差
  // 前面写0的原因在于：数组的一部分可能包括第一个元素，那么就需要一个被减去的元素，即前缀和的第一个元素
  // 差分数组
  // 多个操作，每个操作给一个区间内的数都加1，[0,0,0,0,0]
  // 操作完毕后看每个数组中的元素
  // 把每个操作的数组记录下来后求前缀和，前缀和刚好就是结果，如下
  // [1,3]加一，可以在nums[1]处加1，nums[4]处减一，求前缀和=> [0,1,0,0,-1]
  // => 前缀和[0,1,1,1,0]刚好就是结果
  // [0,1]加一，可以在nums[0]处加1，nums[2]处减一，求前缀和 => [1,1,-1,0,-1]
  // => 前缀和[1,2,1,1,0] 用O(k)的时间复杂度记录区间统一操作，最后再用O(n)的时间复杂求前缀和

  // 利用差分数组和前缀和可以求出每个城市的供电站数目
  const n = stations.length;
  const diff = new Array(n + 1).fill(0);
  for (let i = 0; i < stations.length; i++) {
    let start = Math.max(0, i - r);
    let end = i + r + 1;
    diff[start] += stations[i];
    if (i + r < n) diff[end] -= stations[i];
  }
  console.log(diff);
  const initStations = new Array(n).fill(0);
  initStations[0] = diff[0];
  for (let i = 1; i < n; i++) {
    initStations[i] += initStations[i - 1] + diff[i];
  }

  // 最大化最小值
  // 可以用二分搜索，因为最小值越大，越不可能达成要求，最小值越小，越可能达成要求
  // 找到恰好能到达要求的最小值，它就是最大化的最小值

  // 在哪儿建造？min(i+r, n-1)，// i从1开始
  // 影响范围，[i, min(i + 2r, n-1)]
  // 最大值
  const check = (minPower) => {
    // 添加临时发电站的差分数组
    const tempDiff = new Array(n).fill(0);
    let sum = 0, // 计算差分和
      need = 0; // 需要的发电站
    for (let i = 0; i < n; i++) {
      sum += tempDiff[i];
      // 需要的发电站
      let m = minPower - stations[i] - sum;
      if (m > 0) {
        need += m;
        if (need > k) return false;
        // 可以添加，差分更新
        sum += m;
        if (i + r * 2 + 1 < n) tempDiff[i + r * 2 + 1] -= m; // 差分更新
      }
    }
    return true;
  };
  let left = Math.min.apply(null, initStations);
  let right = Math.max.apply(null, initStations) + k; // 最大值就是
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // 满足条件可以继续增大
      left = mid + 1;
    } else {
      // 不满足条件，需要减少
      right = mid - 1;
    }
  }
  return right;
};

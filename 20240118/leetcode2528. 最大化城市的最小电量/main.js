/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-18 14:57:07                                                  *
 * @LastModifiedDate: 2024-01-18 17:24:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始长度为 n 的整数数组 stations ，其中 stations[i] 表示第 i 座城市的供电站数目。

// 每个供电站可以在一定 范围 内给所有城市提供电力。换句话说，如果给定的范围是 r ，在城市 i 处的供电站可以给所有满足 |i - j| <= r 且 0 <= i, j <= n - 1 的城市 j 供电。

// |x| 表示 x 的 绝对值 。比方说，|7 - 5| = 2 ，|3 - 10| = 7 。
// 一座城市的 电量 是所有能给它供电的供电站数目。

// 政府批准了可以额外建造 k 座供电站，你需要决定这些供电站分别应该建在哪里，这些供电站与已经存在的供电站有相同的供电范围。

// 给你两个整数 r 和 k ，如果以最优策略建造额外的发电站，返回所有城市中，最小电量的最大值是多少。

// 这 k 座供电站可以建在多个城市。

/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function (stations, r, k) {
  // 每个城市的供电量可以由前缀和求出
  const n = stations.length;
  const preffix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    preffix[i] = preffix[i - 1] + stations[i - 1];
  }
  const curLamps = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let leftIdx = Math.max(0, i - r);
    let rightIdx = Math.min(n, i + r + 1);
    curLamps[i] = preffix[rightIdx] - preffix[leftIdx];
  }
  // 在curLamps上增加k台电站，其最小值的最大值是多少
  // 使用二分查找法，检查增加后能否满足值都大于等于指定的值
  let left = Math.min.apply(null, curLamps);
  let right = Math.max.apply(null, curLamps) + k;
  const check = (num) => {
    // 检查能否通过k的增加让每个curLamps的值大于等于num
    // 需要利用到差分数组，并实时累加差分值，计算出当前的站点数
    const diff = new Array(n + 1).fill(0); // 差分数组
    let sum = 0,
      m = 0; // sum是累计差分值，m是需要的数字
    for (let i = 0; i < n; i++) {
      sum += diff[i];
      let curLamp = sum + curLamps[i]; // 当前的电站数（包括前面差分的影响）
      if (curLamp < num) {
        // 添加供电站
        const add = num - curLamp;
        m += add;
        if (m > k) return false; // 需要的供电站已经超过限制
        sum += add;
        diff[i] += add; // 更新差分
        diff[Math.min(n, i + 2 * r + 1)] -= add; // [i, i + 2 * r] 范围内的增加站数
      }
    }
    return true;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // 能通过
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

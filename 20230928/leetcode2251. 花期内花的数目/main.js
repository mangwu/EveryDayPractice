/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-28 09:12:41                                                  *
 * @LastModifiedDate: 2023-09-28 10:33:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 flowers ，其中 flowers[i] = [starti, endi] 表示第 i 朵花的 花期 从 starti 到 endi （都 包含）。同时给你一个下标从 0 开始大小为 n 的整数数组 people ，people[i] 是第 i 个人来看花的时间。

// 请你返回一个大小为 n 的整数数组 answer ，其中 answer[i]是第 i 个人到达时在花期内花的 数目 。

/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, people) {
  // 差分数组
  // 但是flowers的取值范围在10^9，所以无法直接使用数组，可以将其离散开来
  const cnt = new Map();
  for (const [start, end] of flowers) {
    cnt.set(start, (cnt.get(start) || 0) + 1);
    cnt.set(end + 1, (cnt.get(end + 1) || 0) - 1);
  }
  const arr = [...cnt];
  // 按照key进行排序
  arr.sort((a, b) => a[0] - b[0]);
  // 将查询按照大小顺序进行排序，但是需要记录原始索引位置
  const m = people.length;
  const idxes = new Array(m).fill(0)
    .map((v, i) => i)
    .sort((a, b) => people[a] - people[b]);
  const ans = new Array(m).fill(0);
  let j = 0; // 遍历arr的索引
  let cur = 0; // 当前花开的数量
  for (const idx of idxes) {
    // 计算ans[idx]
    while (j < arr.length && arr[j][0] <= people[idx]) {
      // 当前people[idx]表示的位置在arr[j][0]之后
      // 根据差分数组概念，当前位置的值需要计算差分数组的前缀和
      cur += arr[j][1];
      j++;
    }
    ans[idx] = cur;
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-29 10:36:32                                                  *
 * @LastModifiedDate: 2023-01-29 11:15:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现在有一个正凸多边形，其上共有 n 个顶点。
// 顶点按顺时针方向从 0 到 n - 1 依次编号。每个顶点上 正好有一只猴子 。下图中是一个 6 个顶点的凸多边形。

// 每个猴子同时移动到相邻的顶点。顶点 i 的相邻顶点可以是：

// 顺时针方向的顶点 (i + 1) % n ，或
// 逆时针方向的顶点 (i - 1 + n) % n 。
// 如果移动后至少有两个猴子位于同一顶点，则会发生 碰撞 。

// 返回猴子至少发生 一次碰撞 的移动方法数。由于答案可能非常大，请返回对 109+7 取余后的结果。

// 注意，每只猴子只能移动一次。
/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  let res = 1;
  if (n <= 100000) {
    for (let i = 3; i <= 100000; i++) {
      res *= 2;
      res %= MOD;
    }
  } else {
    let i = 3;
    for (; i <= n; i += 19) {
      res *= 524288;
      res %= MOD;
    }
  }

  return (res - 2 + MOD) % MOD;
};

// 奇偶数相对就会碰撞

// 0 1 2 3 4 5 6 7

// 总次数  -  1次都不发生的次数
// 2^N - 2

// 2^9^10
//
const MOD = 10 ** 9 + 7;

/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  // 使用BigInt可以通过
  let res = Number(2n ** BigInt(n) % 1000000007n);
  return (res - 2 + MOD) % MOD;
};

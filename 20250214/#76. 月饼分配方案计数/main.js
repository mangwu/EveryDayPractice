/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 15:57:01                                                  *
 * @LastModifiedDate: 2025-02-14 16:59:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 中秋节，公司分月饼，m 个员工，买了 n 个月饼，m ≤ n，每个员工至少分 1 个月饼，但可以分多个，

// 单人分到最多月饼的个数是 Max1 ，单人分到第二多月饼个数是 Max2 ，Max1 - Max2 ≤ 3 ，
// 单人分到第 n - 1 多月饼个数是 Max(n-1)，单人分到第n多月饼个数是 Max(n) ，Max(n-1) – Max(n) ≤ 3,
// 问有多少种分月饼的方法？

// 输入描述

// 每一行输入m n，表示m个员工，n个月饼，m ≤ n

// 输出描述

// 输出有多少种月饼分法

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // m 员工人数; n 月饼个数 n >= m
  const [m, n] = inputs[0].split(" ").map((v) => parseInt(v));
  let left = n - m; // 每人至少分配一个后的剩余月饼数量
  if (left === 0) {
    console.log(1);
    return;
  }
  const dfs = (count, i, pre) => {
    if (i === m) {
      if (count === 0) {
        if (pre <= 3) return 1;
        return 0;
      } else return 0;
    }
    if (count === 0) {
      if (pre <= 3) return 1;
      return 0;
    }
    let res = 0;
    // 第一次选择最大值，可以任意确认
    if (pre === -1) {
      for (let j = 1; j <= count; j++) {
        res += dfs(count - j, i + 1, j);
      }
    } else {
      const initialVal = Math.max(0, pre - 3);
      for (let j = initialVal; j <= count && j <= pre; j++) {
        res += dfs(count - j, i + 1, j);
      }
    }
    return res;
  };
  const res = dfs(left, 0, -1);
  console.log(res);
}
solution();

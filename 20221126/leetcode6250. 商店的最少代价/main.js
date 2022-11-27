/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-26 22:57:04                                                  *
 * @LastModifiedDate: 2022-11-26 23:07:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个顾客访问商店的日志，用一个下标从 0 开始且只包含字符 'N' 和 'Y' 的字符串 customers 表示：

// 如果第 i 个字符是 'Y' ，它表示第 i 小时有顾客到达。
// 如果第 i 个字符是 'N' ，它表示第 i 小时没有顾客到达。
// 如果商店在第 j 小时关门（0 <= j <= n），代价按如下方式计算：

// 在开门期间，如果某一个小时没有顾客到达，代价增加 1 。
// 在关门期间，如果某一个小时有顾客到达，代价增加 1 。
// 请你返回在确保代价 最小 的前提下，商店的 最早 关门时间。

// 注意，商店在第 j 小时关门表示在第 j 小时以及之后商店处于关门状态。

/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  // 计算出Y和N的个数
  let ys = 0;
  const n = customers.length;
  for (const c of customers) {
    if (c === "Y") {
      ys++;
    }
  }
  let ans = 0;
  let min = ys;
  let curY = 0;
  for (let i = 0; i < n; i++) {
    if (customers[i] === "Y") {
      curY++;
      ys--;
    }
    let cur = i - curY + 1 + ys;
    if (cur < min) {
      ans = i + 1;
      min = cur;
    }
  }
  return ans;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-25 23:05:59                                                  *
 * @LastModifiedDate: 2025-01-25 23:17:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 transactions，其中transactions[i] = [costi, cashbacki] 。

// 数组描述了若干笔交易。其中每笔交易必须以 某种顺序 恰好完成一次。在任意一个时刻，你有一定数目的钱 money ，为了完成交易 i ，money >= costi 这个条件必须为真。执行交易后，你的钱数 money 变成 money - costi + cashbacki 。

// 请你返回 任意一种 交易顺序下，你都能完成所有交易的最少钱数 money 是多少。

/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function (transactions) {
  // 最难达成的交易
  transactions.sort((a, b) => {
    const aDiff = a[1] - a[0];
    const bDiff = b[1] - b[0];
    if (aDiff >= 0 && bDiff >= 0) {
      return b[0] - a[0];
    } else if (aDiff < 0 && bDiff < 0) {
      return b[0] - a[0];
    } else return aDiff - bDiff;
  });
  let left = 0;
  let right = 10 ** 14;
  const check = (mid) => {
    let sum = mid;
    for (const [cost, cashback] of transactions) {
      if (sum < cost) return false;
      sum = sum - cost + cashback;
    }
    return true;
  };
  console.log(transactions);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// [[ 5, 0 ], [ 4, 2 ], [ 2, 1 ]] 9 - 5 = 4 + 0 => 4 - 4 = 0 + 2 => 2 - 2 = 0 + 1
// [[ 5, 0 ], [ 2, 1 ], [ 4, 2 ]] 9 - 5 = 4 + 0 => 4 - 2 = 2 + 1 => 3
// [[ 4, 2 ], [ 5, 0 ], [ 2, 1 ]]
// [[ 4, 2 ], [ 2, 1 ], [ 5, 0 ]]
// [[ 2, 1 ], [ 5, 0 ], [ 4, 2 ]]
// [[ 2, 1 ], [ 4, 2 ], [ 5, 0 ]]

/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function (transactions) {
  let totalLost = 0;
  let res = 0;
  for (const [cost, cashback] of transactions) {
    totalLost += Math.max(cost - cashback, 0);
    res = Math.max(res, Math.min(cost, cashback));
  }
  return totalLost + res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-08 20:28:17                                                  *
 * @LastModifiedDate: 2022-06-08 20:54:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 stockPrices ，
// 其中 stockPrices[i] = [dayi, pricei] 表示股票在 dayi 的价格为 pricei 。
// 折线图 是一个二维平面上的若干个点组成的图，横坐标表示日期，纵坐标表示价格，
// 折线图由相邻的点连接而成。比方说下图是一个例子：

/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function (stockPrices) {
  stockPrices.sort((a, b) => a[0] - b[0]);
  const n = stockPrices.length;
  if (n <= 2) {
    return n - 1;
  }
  let a = [
    stockPrices[0][0] - stockPrices[1][0],
    stockPrices[0][1] - stockPrices[1][1],
  ];
  let ans = 1;
  for (let i = 2; i < n; i++) {
    let b = [
      stockPrices[i][0] - stockPrices[i - 1][0],
      stockPrices[i][1] - stockPrices[i - 1][1],
    ];
    let k1 = BigInt(a[0]) * BigInt(b[1]);
    let k2 = BigInt(a[1]) * BigInt(b[0]);
    if (k1 != k2) {
      ans++;
    }
    a = b;
  }
  return ans;
};

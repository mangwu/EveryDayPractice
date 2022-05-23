/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-22 10:47:47                                                  *
 * @LastModifiedDate: 2022-05-22 11:54:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 stockPrices ，
// 其中 stockPrices[i] = [dayi, pricei] 表示股票在 dayi 的价格为 pricei 。
// 折线图 是一个二维平面上的若干个点组成的图，横坐标表示日期，纵坐标表示价格，折线图由相邻的点连接而成。
// 比方说下图是一个例子：

// 请你返回要表示一个折线图所需要的 最少线段数 。
const min = Math.pow(10, -7);
/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function (stockPrices) {
  // 按照天数排序
  stockPrices.sort((a, b) => a[0] - b[0]);
  // 曲线
  let k1 = null;
  let k2 = null;
  let ans = 0;
  const n = stockPrices.length;
  for (let i = 1; i < n; i++) {
    let cur =
      (stockPrices[i][1] - stockPrices[i - 1][1]) /
      (stockPrices[i][0] - stockPrices[i - 1][0]);
    if (k1 !== cur && k2 !== cur.toFixed(6)) {
      k1 = cur;
      k2 = cur.toFixed(6);
      ans++;
    }
  }
  return ans;
};

/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function (stockPrices) {
  // 按照天数排序
  stockPrices.sort((a, b) => a[0] - b[0]);
  const n = stockPrices.length;
  if (n < 3) {
    return n - 1;
  }
  // 曲线
  let x = stockPrices[1][0] - stockPrices[0][0];
  let y = stockPrices[2][1] - stockPrices[2][1];
  let ans = 1;
  for (let i = 2; i < n; i++) {
    let cury = stockPrices[i][1] - stockPrices[i - 1][1];
    let curx = stockPrices[i][0] - stockPrices[i - 1][0];
    if (cury / curx == y / x) {
      continue;
    }
  }
  return ans;
};

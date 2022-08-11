/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-11 15:02:41                                                  *
 * @LastModifiedDate: 2022-08-11 20:45:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
// 求出这个圆圈里剩下的最后一个数字。

// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，
// 因此最后剩下的数字是3。

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  // 0 - n-1
  const arr = new Array(n).fill(0).map((v, i) => i);
  let idx = (m - 1) % arr.length;
  while (arr.length > 1) {
    arr.splice(idx, 1);
    idx += m;
    idx = idx % arr.length;
  }
  return arr[0];
};

// 1 3 1 3
// idx = m - 1 % 2 == 1

// 1 x 1 x
// (0 + m) % 2

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  // 0 - n-1
  // 倒推
  let idx = 0;
  for (let i = 2; i <= n; i++) {
    idx = (idx + m) % i;
  }
  return idx;
};

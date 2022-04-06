/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-06 22:45:44                                                  *
 * @LastModifiedDate: 2022-04-06 23:39:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，
// 计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = [];
  for (let i = 0; i <= n; i++) {
    let num = 0;
    let j = i;
    while (j > 0) {
      if ((j & 1) == 1) {
        num++;
      }
      j = j >> 1;
    }
    ans[i] = num;
  }
  return ans;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // 动态规划做法
  // 每次都要单独计算i的1的位数需要额外的lOG(N)时间
  // 求x的1的位数，可以先得出当前最大的只有一位的一比特数，入2 4 8
  // x减去这些数就会得到之前已经计算过个数的数，而这些数的1位数加上1就是当前的位数
  const bits = new Array(n + 1).fill(0);
  // 当前的最高位
  let curHighBit = 0;
  for (let i = 1; i <= n; i++) {
    // 判断当前位是否为单比特位单比特位的
    if ((i & (i - 1)) == 0) {
      curHighBit = i;
    }
    bits[i] = bits[i - curHighBit] + 1;
  }
  return bits;
};

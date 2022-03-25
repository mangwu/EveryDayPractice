/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 09:10:17                                                  *
 * @LastModifiedDate: 2022-03-25 09:42:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
//  */

// 给定一个整数 n ，返回 n! 结果中尾随零的数量。

// 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 5的个数总比2少，所以不需要计算2的个数
  let num5 = 0;
  // 计算出5和2的倍数个数即可
  for (let i = n; i > 0; i--) {
    if (i % 5 == 0) {
      num5++;
      let divider = i / 5;
      while (divider % 5 == 0) {
        num5++;
        divider = divider / 5;
      }
    }
  }
  // console.log(num5);
  return num5;
};
trailingZeroes(78);

// 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1

// 进一步优化 遍历是可以按照 5 10 15 这种一次递增5的方式进行遍历

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 5的个数总比2少，所以不需要计算2的个数
  let num5 = 0;
  // 计算出5和2的倍数个数即可
  for (let i = 5; i <= n; i += 5) {
    num5++;
    let divider = i / 5;
    while (divider % 5 == 0) {
      num5++;
      divider = divider / 5;
    }
  }
  // console.log(num5);
  return num5;
};

// 数中5的倍数的数有 n / 5个，这就共享了 n / 5个的5了
// 再除以5，那么得到的就是能恭喜两个5的数的个数，由此得出logn的算法
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 5的个数总比2少，所以不需要计算2的个数
  let num5 = 0;
  while (n !== 0) {
    n = Math.floor(n / 5);
    num5 += n;
  }
  return num5;
};

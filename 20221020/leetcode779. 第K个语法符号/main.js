/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-20 08:55:45                                                  *
 * @LastModifiedDate: 2022-10-20 09:47:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们构建了一个包含 n 行( 索引从 1  开始 )的表。首先在第一行我们写上一个 0。
// 接下来的每一行，将前一行中的0替换为01，1替换为10。

// 例如，对于 n = 3 ，第 1 行是 0 ，第 2 行是 01 ，第3行是 0110 。
// 给定行数 n 和序数 k，返回第 n 行中第 k 个字符。（ k 从索引 1 开始）

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  let cur = 0;
  let rest = k;
  while (n > 0) {
    if (rest > Math.pow(2, n - 1)) {
      // 选右边
      rest -= Math.pow(2, n - 1);
      cur = cur === 0 ? 1 : 0;
    }
    n--;
  }
  return cur;
};

//               0   2^0
//              0 1   2^1
//            0 1 1 0  2^2
//        0 1 1 0 1 0 0 1
// 0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0

// (k - 2 ^ (n - 1) - 1) / 2 + 2 ^ (n - 2) - 1
// k / 2 - 2 ^(n-2) - 1 / 2 + 2 ^ (n-2) - 1
// (k - 3) / 2

//

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  let cur = 0;
  let rest = k;
  n--;
  while (n > 0) {
    if (rest > Math.pow(2, n - 1)) {
      // 选右边
      rest -= Math.pow(2, n - 1);
      cur ^= 1;
    }
    n--;
  }
  return cur;
};

// 1024 19 5 29 2 1 17 4
// | % ^ * | << +

//

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  // 递归
  if (k === 1) {
    return 0;
  }
  if (k > 1 << (n - 2)) {
    return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)));
  }
  return kthGrammar(n - 1, k);
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-02 23:04:45                                                  *
 * @LastModifiedDate: 2024-11-02 23:18:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 n 和 k。

// 你可以选择 n 的 二进制表示 中任意一个值为 1 的位，并将其改为 0。

// 返回使得 n 等于 k 所需要的更改次数。如果无法实现，返回 -1。

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  if (k > n) return -1;
  const nBinary = n.toString(2);
  const len = nBinary.length;
  const kBinary = k.toString(2).padStart(len, 0);
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (nBinary[i] === "1" && kBinary[i] === "0") {
      res++;
    } else if (nBinary[i] === "0" && kBinary[i] === "1") return -1;
  }
  return res;
};

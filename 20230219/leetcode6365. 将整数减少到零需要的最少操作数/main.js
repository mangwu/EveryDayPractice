/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-19 11:18:19                                                  *
 * @LastModifiedDate: 2023-02-19 11:30:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，你可以执行下述操作 任意 次：

// n 加上或减去 2 的某个 幂
// 返回使 n 等于 0 需要执行的 最少 操作数。

// 如果 x == 2i 且其中 i >= 0 ，则数字 x 是 2 的幂。

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  const binary = ("0" + n.toString(2)).split("");
  const len = binary.length;
  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (binary[i] == "1" && i - 1 >= 0 && binary[i - 1] == "1") {
      res++;
      while (binary[i] === "1") {
        binary[i--] = "0";
      }
      binary[i] = "1";
      i++;
    }
  }
  for (const ch of binary) {
    if (ch === "1") {
      res++;
    }
  }
  return res;
};

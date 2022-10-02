/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-02 10:31:33                                                  *
 * @LastModifiedDate: 2022-10-02 10:35:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 a 和 b ，返回 a 和 b 的 公 因子的数目。

// 如果 x 可以同时整除 a 和 b ，则认为 x 是 a 和 b 的一个 公因子 。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  const fa = getFactors(a);
  const fb = getFactors(b);
  let ans = 0;
  for (const key of fa) {
    if (fb.has(key)) {
      ans++;
    }
  }
  return ans;
};

var getFactors = function (num) {
  const sqrt = Math.sqrt(num);
  const ans = new Set();
  for (let i = 1; i <= sqrt; i++) {
    if (num % i == 0) {
      ans.add(i);
      ans.add(num / i);
    }
  }
  return ans;
};

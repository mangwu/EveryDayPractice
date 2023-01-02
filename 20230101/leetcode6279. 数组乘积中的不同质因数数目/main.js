/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-01 10:36:26                                                  *
 * @LastModifiedDate: 2023-01-01 10:41:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums ，对 nums 所有元素求积之后，找出并返回乘积中 不同质因数 的数目。

// 注意：

// 质数 是指大于 1 且仅能被 1 及自身整除的数字。
// 如果 val2 / val1 是一个整数，则整数 val1 是另一个整数 val2 的一个因数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  const set = new Set();
  for (const num of nums) {
    getFactors(num, set);
  }
};

// 判断是否是质数
var isFactor = function (n) {
  if (n <= 3) {
    return true;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const Factors = [];
for (let i = 2; i <= 1000; i++) {
  if (isFactor(i)) {
    Factors.push(i);
  }
}
// 获取质因数
var getFactors = function (n, set) {
  let k = 0;
  while (n !== 1) {
    while (n % Factors[k] === 0) {
      n /= Factors[k];
      set.add(Factors[k]);
    }
    k++;
  }
};

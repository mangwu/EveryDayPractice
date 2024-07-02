/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-02 09:12:39                                                  *
 * @LastModifiedDate: 2024-07-02 09:27:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums。

// 返回两个（不一定不同的）质数在 nums 中 下标 的 最大距离。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
  let firstIndex = nums.findIndex((v) => isPrime(v));
  let lastIndex = nums.findLastIndex((v) => isPrime(v));
  return lastIndex - firstIndex;
};

function isPrime(num) {
  if (num === 1) return false; // 1 不是质数
  const max = Math.sqrt(num);

  for (let i = 2; i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

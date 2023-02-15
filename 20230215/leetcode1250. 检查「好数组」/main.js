/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-15 08:48:37                                                  *
 * @LastModifiedDate: 2023-02-15 10:51:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums，你需要从中任选一些子集，然后将子集中每一个数乘以一个 任意整数，
// 并求出他们的和。

// 假如该和结果为 1，那么原数组就是一个「好数组」，则返回 True；否则请返回 False。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
  // 子集：不是子数组，可以不管nums中元素的顺序
  // 任意两个数，只要保证它们的公约数
  nums.sort((a, b) => a - b);
  if (nums[0] === 1) return true; // 1可以变成任意整数,所以必然返回
  // 偶数相减必然是偶数，所以nums中不能全是偶数
  // 同理，nums中不能全是3的倍数，5的倍数，7的倍数...
  // 计算nums[0]的质因数，然后将其和其它所有数进行比较
  // 如果存在一个质因数让所有数都能整除，那么就不存在好数组
};
/**
 * @description 判断一个数是否为质数
 * @param {number} num 被判断的数
 * @returns {boolean}
 */
var isFactor = function (num) {
  if (num < 4) return true;
  const sqrtN = Math.sqrt(num);
  for (let i = 2; i <= sqrtN; i++) {
    if (num % i == 0) return false;
  }
  return true;
};
const Factors = [];
function getFactors() {
  for (let i = 2; i <= 1000000000; i++) {
    if (isFactor(i)) Factors.push(i);
  }
}
// getFactors();
/**
 * @description 获取一个数的所有质因数
 * @param {number} num 被求质数的数
 * @returns {number[]}
 */
var getNumFactors = function (num) {
  if (isFactor(num)) return [num];
  const res = new Set();
  let idx = 0;
  while (num >= Factors[idx]) {
    while (num % Factors[idx] === 0) {
      num /= Factors[idx];
      console.log(num);
      res.add(Factors[idx]);
    }
    idx++;
  }
  return [...res];
};
console.log(getNumFactors(8541757));

// 1千万内的质数有664579个，所以不能单纯依靠求质数得解

// 2 3 5   2 7 11   3 13 17
// 30      154      663

// 34  64
// 17  32
// 255 256
//
// 6 9
// 3 9
//

// x % y = a
//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
  // 子集：不是子数组，可以不管nums中元素的顺序
  // 任意两个数，只要保证它们的公约数
  // 计算所有数的公约数,保证最小公约数为1就是一个好数组
  let cur = nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    cur = gcd(cur, nums[i]);
    if (cur === 1) return true;
  }
  return cur === 1;
};

var gcd = function (a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
};

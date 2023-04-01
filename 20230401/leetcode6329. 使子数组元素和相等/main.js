/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-01 22:40:59                                                  *
 * @LastModifiedDate: 2023-04-02 00:56:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 arr 和一个整数 k 。数组 arr 是一个循环数组。换句话说，数组中的最后一个元素的下一个元素是数组中的第一个元素，数组中第一个元素的前一个元素是数组中的最后一个元素。

// 你可以执行下述运算任意次：

// 选中 arr 中任意一个元素，并使其值加上 1 或减去 1 。
// 执行运算使每个长度为 k 的 子数组 的元素总和都相等，返回所需要的最少运算次数。

// 子数组 是数组的一个连续部分。
const DATA = new Map();
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function (arr, k) {
  const n = arr.length;
  if (k === n) return 0;
  // 首先保证arr的长度可以整除k
  // 如果不能整除，只能让每个元素相同
  // 特殊情况，只能让每个元素都相同
  let res = getMinVal(arr);

  // 考虑可以连续k个相同的情况
  if (DATA.has(k)) k = DATA.get(k);
  if (k === 1 || n % k !== 0) {
    return res;
  }
  const m = n / k;

  let curRes = 0;
  for (let i = 0; i < k; i++) {
    const curArr = [];
    for (let j = 0; j < m; j++) {
      curArr.push(arr[j * k + i]);
    }
    curRes += getMinVal(curArr);
  }
  return Math.min(curRes, res);
};

// 使得arr中的数连续相同
// 例如 1 2 3 1 2 3 1 2 3  k=3
// 2 4 6 1 2 4 6 1 2 4 6 1 k=4

function getMinVal(arr) {
  const n = arr.length;
  const copy = arr.slice();
  copy.sort((a, b) => a - b);
  let choose = copy[Math.floor(n / 2)];
  return arr.reduce((pre, cur) => Math.abs(cur - choose) + pre, 0);
}

function getMinDivisor(num) {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) return i;
  }
  return false;
}
// for (let i = 2; i < 100000; i++) {
//   const target = getMinDivisor(i);
//   if (target) DATA.set(i, target);
// }

// [6,2,8,5,7,10]
// 4
function gcd(a, b) {
  if (a < b) return gcd(b, a);
  if (b === 0) return a;
  return gcd(b, a % b);
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function (arr, k) {
  const n = arr.length;
  if (k === n) return 0;
  let res = getMinVal(arr);
  k = gcd(n, k); // 求最大公约数
  // 考虑可以连续k个相同的情况
  if (k === 1) {
    return res;
  }
  const m = n / k;
  let curRes = 0;
  for (let i = 0; i < k; i++) {
    const curArr = [];
    for (let j = 0; j < m; j++) {
      curArr.push(arr[j * k + i]);
    }
    curRes += getMinVal(curArr);
  }
  return Math.min(curRes, res);
};

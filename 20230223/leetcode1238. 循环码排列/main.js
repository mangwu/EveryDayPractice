/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-23 08:44:09                                                  *
 * @LastModifiedDate: 2023-02-23 21:59:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 n 和 start。你的任务是返回任意 (0,1,2,,...,2^n-1) 的排列 p，并且满足：

// p[0] = start
// p[i] 和 p[i+1] 的二进制表示形式只有一位不同
// p[0] 和 p[2^n -1] 的二进制表示形式也只有一位不同
/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  // 无论start是什么，只要构建一个排列其每位只有一个元素不同，最后找到这个start在排列中的位置即可
  const idx = k.indexOf(start);
  return k.slice(idx, 2 ** n).concat(k.slice(0, idx));
};

// const k = [0];

// for (let i = 1; i <= 16; i++) {
//   const num = 2 ** (i - 1);
//   for (let i = num - 1; i >= 0; i--) {
//     k.push(k[i] + num);
//   }
// }

const dfs = (arr) => {
  const len = arr.length;
  const height = Math.log2(len);
  if (Math.log2(len) === 16) return arr;
  const add = 2 ** height;
  for (let i = len - 1; i >= 0; i--) {
    arr.push(arr[i] + add);
  }
  return dfs(arr);
};
// const k = dfs([0]);

// N = 4
//   0  => 1    10   100  1000
//   1  => 0    11   101  1001
//  10  => 0    11   110  1010
//  11  => 1    10   111  1011
// 100  => 0    101  110  1100
// 101  => 1    100  111  1101
// 110  => 10   100  111  1110
// 111  => 11   110  101  1111
//1000  => 0    1001 1010 1100
//1001  => 1    1000 1011 1101
//1010  => 10   1000 1011 1110
//1011  => 11   1010 1001 1111
//1100  => 100  1000 1101 1110
//1101  => 101  1001 1100 1111
//1110  => 110  1010 1100 1111
//1111  => 111  1011 1101 1110

// 0 -> 1 ->
// 11 -> 10
// 110 -> 111 -> 101 -> 100
//

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  const dfs = (arr) => {
    const len = arr.length;
    const height = Math.log2(len);
    if (height === n) return arr;
    const add = 2 ** height;
    for (let i = len - 1; i >= 0; i--) {
      arr.push(arr[i] + add);
    }
    return dfs(arr);
  };
  const k = dfs([0]);
  // 无论start是什么，只要构建一个排列其每位只有一个元素不同，最后找到这个start在排列中的位置即可
  const idx = k.indexOf(start);

  return k.slice(idx).concat(k.slice(0, idx));
};

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  // 无论start是什么，只要构建一个排列其每位只有一个元素不同，最后找到这个start在排列中的位置即可
  return k.slice(0, 1 << n).map((v) => v | start);
};

const k = [0];

for (let i = 1; i <= 16; i++) {
  const num = 1 << (i - 1);
  for (let i = num - 1; i >= 0; i--) {
    k.push(k[i] | num);
  }
}

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  const k = [start];

  for (let i = 1; i <= n; i++) {
    const num = 1 << (i - 1);
    for (let i = num - 1; i >= 0; i--) {
      k.push(((k[i] ^ start) | num) ^ start);
    }
  }
  // 无论start是什么，只要构建一个排列其每位只有一个元素不同，最后找到这个start在排列中的位置即可
  return k;
};

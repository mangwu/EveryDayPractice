/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-24 10:56:08                                                  *
 * @LastModifiedDate: 2022-10-24 16:17:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，请你将 1 到 n 的二进制表示连接起来，并返回连接结果对应的 十进制 数字对 109 + 7 取余的结果。

const MAX = 10n ** 9n + 7n;
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i.toString(2);
  }
  const m = str.length;
  let ans = 0n;
  for (let i = 0; i < m; i++) {
    if (str[i] === "1") {
      let cur = 2n ** BigInt(m - i - 1) % MAX;
      ans += cur;
      ans %= MAX;
    }
  }
  return ans;
};

/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i] = i.toString(2).length;
  }
  // 求前缀和
  for (let i = n - 1; i > 1; i--) {
    arr[i] = arr[i] + arr[i + 1];
  }
  arr.push(0);
  let ans = 0n;
  // 求每个数左移后的数，然后求和
  for (let i = 1; i <= n; i++) {
    let cur = (BigInt(i) << BigInt(arr[i + 1])) % MAX;
    ans += cur;
    ans %= MAX;
  }
  return ans;
};

const MOD = Math.pow(10, 9) + 7;
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let ans = 0;
  let shift = 0; // 记录左移位数
  for (let i = 1; i <= n; i++) {
    if (!(i & (i - 1))) {
      shift++;
    }
    ans = (ans * Math.pow(2, shift) + i) % MOD;
  }
  return ans;
};

// ((ans * Math.pow(2, shift) + i) % MOD) * (Math.pow(2, shift_) + i_) % MOD
// = (ans * Math.pow(2, shift)%MOD * (Math.pow(2, shift_)+ i % MOD *  (Math.pow(2, shift_) + i_) % MOD

// ((ans * Math.pow(2, shift) + i) * Math.pow(2, shift_) + i_) % MOD
// = (ans * Math.pow(2, shift) * Math.pow(2, shift_) + i * Math.pow(2, shift_) + i_) % MOD

/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let ans = 0n;
  let shift = 0n; // 记录左移位数
  n = BigInt(n);
  for (let i = 1n; i <= n; i++) {
    if (!(i & (i - 1n))) {
      shift++;
    }
    ans = (ans << shift | i) % MAX;
  }
  return ans;
};

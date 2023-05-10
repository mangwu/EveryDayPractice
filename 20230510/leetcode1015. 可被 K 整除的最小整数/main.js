/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-10 08:55:45                                                  *
 * @LastModifiedDate: 2023-05-10 09:32:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定正整数 k ，你需要找出可以被 k 整除的、仅包含数字 1 的最 小 正整数 n 的长度。

// 返回 n 的长度。如果不存在这样的 n ，就返回-1。

// 注意： n 不符合 64 位带符号整数。

/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k % 2 === 0) return -1;
  const set = new Set();
  const strK = k.toString();
  const n = strK.length;
  const lastK = parseInt(strK[n - 1]);
  // 尾部数字
  for (let i = 1; ; i++) {
    let cur = (i * lastK).toString();
    let lastNum = parseInt(cur[cur.length - 1]);
    if (set.has(lastNum)) break;
    set.add(lastNum);
  }
  if (!set.has(1)) return -1;
  // 用bigInt做
  let ones = 1n;
  k = BigInt(k);
  let res = 1;
  while (ones < k) {
    res++;
    ones = ones * 10n + 1n;
  }
  while (ones % k !== 0n) {
    res++;
    ones = ones * 10n + 1n;
  }
  return res;
};

/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k % 2 === 0) return -1;
  const set = new Set();
  const strK = k.toString();
  const n = strK.length;
  const lastK = parseInt(strK[n - 1]);
  // 尾部数字
  for (let i = 1; ; i++) {
    let cur = (i * lastK).toString();
    let lastNum = parseInt(cur[cur.length - 1]);
    if (set.has(lastNum)) break;
    set.add(lastNum);
  }
  if (!set.has(1)) return -1;
  let ones = 1;
  let res = 1;
  while (ones < k) {
    res++;
    ones = ones * 10 + 1;
  }
  // 用连续取余做
  let rest = ones % k;
  while (rest !== 0) {
    res++;
    rest = rest * 10 + 1;
    rest = rest % k;
  }
  return res;
};

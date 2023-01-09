/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-09 09:01:26                                                  *
 * @LastModifiedDate: 2023-01-09 09:21:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个偶数 n​​​​​​ ，已知存在一个长度为 n 的排列 perm ，其中 perm[i] == i​（下标 从 0 开始 计数）。

// 一步操作中，你将创建一个新数组 arr ，对于每个 i ：

// 如果 i % 2 == 0 ，那么 arr[i] = perm[i / 2]
// 如果 i % 2 == 1 ，那么 arr[i] = perm[n / 2 + (i - 1) / 2]
// 然后将 arr​​ 赋值​​给 perm 。

// 要想使 perm 回到排列初始值，至少需要执行多少步操作？返回最小的 非零 操作步数。

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  const perm = new Array(n).fill(0).map((_v, i) => i);
  const arr = new Array(n).fill(0);
  let res = 0;
  while (true) {
    res++;
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) arr[i] = perm[i / 2];
      if (i % 2 === 1) arr[i] = perm[n / 2 + (i - 1) / 2];
    }
    for (let i = 0; i < n; i++) {
      perm[i] = arr[i];
    }
    if (isSame(perm)) {
      return res;
    }
  }
};

/**
 * @description 和初始perm是否相同
 * @param {number[]} arr
 * @return {boolean}
 */
var isSame = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return false;
  }
  return true;
};

// 0 1 2 3 4 5 6 7
// 0 4 1 5 2 6 3 7

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  if (n === 2) {
    return 1;
  }
  let pow = 2;
  let res = 0;
  while (pow !== 1) {
    res++;
    pow = (pow * 2) % (n - 1);
  }
  return res;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-25 14:06:26                                                  *
 * @LastModifiedDate: 2022-10-25 14:45:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  let perm = new Array(n).fill(0).map((_v, i) => i);
  let ans = 1;
  let pre = [];
  oneOperaton(perm, pre, n);
  while (!isEqual(pre, n)) {
    let temp = perm;
    perm = pre;
    pre = temp;
    oneOperaton(perm, pre, n);
    console.log(pre);
    ans++;
  }
  return ans;
};
var oneOperaton = function (perm, pre, n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      pre[i] = perm[i / 2];
    } else {
      pre[i] = perm[n / 2 + (i - 1) / 2];
    }
  }
};

var isEqual = function (arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i) {
      return false;
    }
  }
  return true;
};

// 0 1 2 3 4 5 6 7
// 0   1   2   3
//   4   5   6   7

// 0 4 1 5 2 6 3 7
// 0   4   1   5
//   2   6   3   7

// 0 2 4 6 1 3 5 7
// 0   2   4   6
//   1   3   5   7



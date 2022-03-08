/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-08 09:58:29                                                  *
 * @LastModifiedDate: 2022-03-08 10:23:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

// k用于指定组合数组中数的个数
// n表示数的范围
// 返回所有的组合
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 组合个数 Ckn ,从n个选k个数的选法
  // 递归写法

  if (k == 1) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
      ans.push([i]);
    }
    return ans;
  }
  // k不等于1的情况
  const ans = [];
  const preAns = combine(n, k - 1);
  for (let p of preAns) {
    for (let i = p[p.length - 1] + 1; i <= n; i++) {
      ans.push(p.concat(i));
    }
  }
  return ans;
};

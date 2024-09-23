/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-22 21:45:21                                                  *
 * @LastModifiedDate: 2024-09-22 22:10:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

// 如果小镇法官真的存在，那么：

// 小镇法官不会信任任何人。
// 每个人（除了小镇法官）都信任这位小镇法官。
// 只有一个人同时满足属性 1 和属性 2 。
// 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

// 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trusted = new Array(n + 1).fill(0).map((v) => [true, new Set()]);
  for (const [a, b] of trust) {
    trusted[a][0] = false;
    trusted[b][1].add(a);
  }
  for (let i = 1; i <= n; i++) {
    if (trusted[i][0] && trusted[i][1].size === n - 1) return i;
  }
  return -1;
};

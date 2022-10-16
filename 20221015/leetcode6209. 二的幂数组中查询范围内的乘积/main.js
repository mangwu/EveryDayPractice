/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-15 22:42:10                                                  *
 * @LastModifiedDate: 2022-10-15 23:06:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，你需要找到一个下标从 0 开始的数组 powers ，它包含 最少 数目的 2 的幂，且它们的和为 n 。powers 数组是 非递减 顺序的。
// 根据前面描述，构造 powers 数组的方法是唯一的。

// 同时给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [lefti, righti] ，其中 queries[i] 表示请你求出满足 lefti <= j <= righti 的所有 powers[j] 的乘积。

// 请你返回一个数组 answers ，长度与 queries 的长度相同，其中 answers[i]是第 i 个查询的答案。由于查询的结果可能非常大，请你将每个 answers[i] 都对 109 + 7 取余 。

const MAX = Math.pow(10, 9) + 7;
const MAX_N = 1000000007n;

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
  // 前缀和
  const powers = [];
  let cur = 0;
  while (n >>> cur > 0) {
    if (((n >>> cur) & 1) === 1) {
      powers.push(cur);
    }
    cur++;
  }
  console.log(powers);
  const preffix = new Array(powers.length + 1).fill(0);
  for (let i = 1; i <= powers.length; i++) {
    preffix[i] = preffix[i - 1] + powers[i - 1];
  }
  console.log(preffix);
  const len = queries.length;
  const ans = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const [start, end] = queries[i];
    if (start == end) {
      ans[i] = powers[start];
    } else {
      ans[i] = preffix[end + 1] - preffix[start];
    }
  }
  console.log(ans);
  for (let i = 0; i < len; i++) {
    if (ans[i] <= 53) {
      ans[i] = Math.pow(2, ans[i]) % MAX;
    } else {
      ans[i] = Number(2n ** BigInt(ans[i]) % MAX_N);
    }
  }
  return ans;
};

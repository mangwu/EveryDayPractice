/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-20 10:38:23                                                  *
 * @LastModifiedDate: 2022-10-21 10:33:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个待查数组 queries ，数组中的元素为 1 到 m 之间的正整数。
// 请你根据以下规则处理所有待查项 queries[i]（从 i=0 到 i=queries.length-1）：

// 一开始，排列 P=[1,2,3,...,m]。
// 对于当前的 i ，请你找出待查项 queries[i] 在排列 P 中的位置（下标从 0 开始），
// 然后将其从原位置移动到排列 P 的起始位置（即下标为 0 处）。注意，
// queries[i] 在 P 中的位置就是 queries[i] 的查询结果。
// 请你以数组形式返回待查数组  queries 的查询结果。

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  const arr = new Array(m).fill(0).map((v, i) => i + 1);
  const ans = [];
  for (const querie of queries) {
    const idx = arr.indexOf(querie);
    ans.push(idx);
    arr.splice(idx, 1);
    arr.unshift(querie);
  }
  return ans;
};

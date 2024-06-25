/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-25 09:09:24                                                  *
 * @LastModifiedDate: 2024-06-25 10:44:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始大小为 m x n 的二进制矩阵 grid 。

// 从原矩阵中选出若干行构成一个行的 非空 子集，如果子集中任何一列的和至多为子集大小的一半，那么我们称这个子集是 好子集。

// 更正式的，如果选出来的行子集大小（即行的数量）为 k，那么每一列的和至多为 floor(k / 2) 。

// 请你返回一个整数数组，它包含好子集的行下标，请你将子集中的元素 升序 返回。

// 如果有多个好子集，你可以返回任意一个。如果没有好子集，请你返回一个空数组。

// 一个矩阵 grid 的行 子集 ，是删除 grid 中某些（也可能不删除）行后，剩余行构成的元素集合。

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var goodSubsetofBinaryMatrix = function (grid) {
  // 找到两行之与的值为0的组合
  const m = grid.length;
  const n = grid[0].length; // n ∈ [1,5]
  const hash = new Map();
  const dfs = (i, arr, sum) => {
    if (hash.has(sum)) return [hash.get(sum)];
    if (i === n) return false;
    let res = dfs(i + 1, arr, sum);
    if (arr[i] === 0) {
      res = res || dfs(i + 1, arr, sum + Math.pow(2, n - i - 1));
    }
    return res;
  };
  for (let i = 0; i < m; i++) {
    const row = grid[i];
    const num = parseInt(row.join(""), 2);
    if (num === 0) return [i];
    // 查找hash，检查是否包含需要的情况
    const res = dfs(0, row, 0);
    console.log(res);
    if (res !== false) {
      res.push(i);
      return res;
    }
    hash.set(num, i);
  }
  return [];
};

// 当n 在[1,5]时，就只用考虑选择1行和2行的情况



// 当n等于6时，任意2行就有可能不存在相与为0的情况，如下，4行成立
//  1 1 1 0 0 0
//  1 0 0 1 1 0
//  0 1 0 1 0 1
//  0 0 1 0 1 1

// 
/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-02 08:54:09                                                  *
 * @LastModifiedDate: 2022-12-02 09:29:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个盒子。给你一个长度为 n 的二进制字符串 boxes ，其中 boxes[i] 的值为 '0' 表示第 i 个盒子是 空 的，而 boxes[i] 的值为 '1' 表示盒子里有 一个 小球。

// 在一步操作中，你可以将 一个 小球从某个盒子移动到一个与之相邻的盒子中。第 i 个盒子和第 j 个盒子相邻需满足 abs(i - j) == 1 。注意，操作执行后，某些盒子中可能会存在不止一个小球。

// 返回一个长度为 n 的数组 answer ，其中 answer[i] 是将所有小球移动到第 i 个盒子所需的 最小 操作数。

// 每个 answer[i] 都需要根据盒子的 初始状态 进行计算。

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const idxs = [];
  const n = boxes.length;
  for (let i = 0; i < n; i++) {
    if (boxes[i] === "1") {
      idxs.push(i);
    }
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    let cur = 0;
    for (const idx of idxs) {
      cur += Math.abs(i - idx);
    }
    ans[i] = cur;
  }
  return ans;
};

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let ones = 0;
  let right = 0;
  let left = 0;
  const n = boxes.length;
  for (let i = 0; i < n; i++) {
    if (boxes[i] === "1") {
      ones++;
      right += i;
    }
  }
  let ans = [];
  ans.push(right);
  let leftOnes = 0;
  let rightOnes = ones;
  for (let i = 1; i < n; i++) {
    if (boxes[i - 1] === "1") {
      leftOnes++;
      rightOnes--;
    }
    left += leftOnes;
    right -= rightOnes;
    ans[i] = left + right;
  }
  return ans;
};

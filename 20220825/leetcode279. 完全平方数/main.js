/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-25 10:06:55                                                  *
 * @LastModifiedDate: 2022-08-25 15:22:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
// 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 至少可以全部由1组成
  let ans = n;
  const set = new Set();
  const arr = [];
  for (let i = 1; i * i <= n; i++) {
    // 可选的平方数
    set.add(i * i);
    arr.push(i * i);
  }
  arr.reverse();
  const dfs = (val, num, idx) => {
    // 减枝操作
    if (num >= ans) {
      return;
    }
    // 选择当前值
    if (val >= arr[idx]) {
      dfs(val - arr[idx], num + 1, idx);
    }
    // 不选择当前值
    dfs(val, num, idx + 1);
  };
  dfs(n, 0, 0);
  return ans;
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 至少可以全部由1组成
  let ans = n;
  const arr = [];
  for (let i = 1; i * i <= n; i++) {
    // 可选的平方数
    arr.push(i * i);
  }
  arr.reverse();
  const dfs = (val, num, idx) => {
    if (val == 0) {
      ans = Math.min(ans, num);
      return;
    }
    if (num >= ans) {
      return;
    }
    if (idx < arr.length) {
      // 选择当前元素
      if (arr[idx] <= val) {
        dfs(val - arr[idx], num + 1, idx);
      }
      // 不选择当前元素
      if (idx < arr.length - 1) {
        dfs(val, num, idx + 1);
      }
    }
  };
  dfs(n, 0, 0);
  return ans;
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 动态规划
  if (n == 1) {
    return 1;
  }
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const set = new Set();
  const sqrtNum = Math.sqrt(n);
  // bfs
  let queue = [0];
  let level = 1;
  while (queue.length) {
    const nxt = [];
    for (let q of queue) {
      for (let i = 1; i <= sqrtNum; i++) {
        let ele = q + i * i;
        if (ele == n) {
          return level;
        }
        // 不需要重复元素
        if (!set.has(ele)) {
          set.add(ele);
          nxt.push(ele);
        }
      }
    }
    level++;
    queue = nxt;
  }
  return -1;
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (isSqrtNum(n)) {
    return 1;
  }
  if (isAnswer4(n)) {
    return 4;
  }
  // 判断是否能表示为a^2 + b^2
  const sqNum = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= sqNum; i++) {
    if (isSqrtNum(n - i * i)) {
      return 2;
    }
  }
  return 3;
};

/**
 * @description 判断是否是平方数
 * @param {number} num
 */
var isSqrtNum = (num) => {
  const sqNum = Math.floor(Math.sqrt(num));
  return sqNum * sqNum === num;
};

/**
 * @description 判断是否能满足4^k(8m + 7)
 * @param {number} num
 * @returns {boolean}
 */
var isAnswer4 = (num) => {
  while (num % 4 == 0) {
    num /= 4;
  }
  return num % 8 == 7;
};

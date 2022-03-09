/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-09 09:35:24                                                  *
 * @LastModifiedDate: 2022-03-09 10:05:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 爬了一层或者两层后，
  // 攀爬剩下楼梯时以同样有两种方式进行选择
  // 使用递归，将爬楼梯变为当前爬了1层或者2层后，在加上剩下的爬楼梯的方式
  if (n == 2) {
    return 2;
  }
  if (n == 1) {
    return 1;
  }
  // 爬一层，再计算剩余爬的方式
  let a = climbStairs(n - 1);
  // 爬两层
  let b = climbStairs(n - 2);
  return a + b;
};

// 使用动态规划

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 一般而言，使用递归能解决的问题就能用动态规划解决
  // 到达第i层只能从i - 1 层和i - 2层的方式获得
  // 所以先求得i - 1和i - 2层的到达个数即可，而i - 1 和 i - 2层的到达方式可以以同样公式求出
  // 即dp[i] = dp[i-1] + dp[i-2]
  if (n == 1) {
    return 1;
  }
  // 声明动态规划dp
  const dp = new Array(n + 1).fill(0);
  // 初始的两个层数是已知的
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 可以发现本质上就是斐波那契数列， 可以直接利用斐波那契数列计算公式求解
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // fn = (1/√5)[(1+√5)^n/2 - (1-√5)^n/2];
  const sqrt_5 = Math.sqrt(5);
  const fib_n =
    Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
  // round => 最近整数
  return Math.round(fib_n / sqrt_5);
};

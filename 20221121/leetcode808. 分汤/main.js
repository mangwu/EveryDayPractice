/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-21 08:51:54                                                  *
 * @LastModifiedDate: 2022-11-21 14:42:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 A 和 B 两种类型 的汤。一开始每种类型的汤有 n 毫升。有四种分配操作：

// 提供 100ml 的 汤A 和 0ml 的 汤B 。
// 提供 75ml 的 汤A 和 25ml 的 汤B 。
// 提供 50ml 的 汤A 和 50ml 的 汤B 。
// 提供 25ml 的 汤A 和 75ml 的 汤B 。
// 当我们把汤分配给某人之后，汤就没有了。每个回合，我们将从四种概率同为 0.25 的操作中进行分配选择。如果汤的剩余量不足以完成某次操作，我们将尽可能分配。当两种类型的汤都分配完时，停止操作。

// 注意 不存在先分配 100 ml 汤B 的操作。

// 需要返回的值： 汤A 先分配完的概率 +  汤A和汤B 同时分配完的概率 / 2。返回值在正确答案 10-5 的范围内将被认为是正确的

/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n == 0) {
    return 0.5;
  }
  // 平均每次分配的数量
  let avergea = (100 + 75 + 50 + 25) / 400; // 0.625
  let avergeb = (25 + 50 + 75) / 400; // 0.375
  // 2n在100以内，概率为0.625
  let time = Math.floor((2 * n) / 100);
  let rest = (2 * n) % 100;
  // 同时分配完就是只进行2，3，4操作并且2和4操作次数相同的概率
  let ab = 3 / 4;
  // a先分配完就是至少进行一次1操作的概率
  let a = 1 - Math.pow(0.25, time);
  if (time) {
  }
  return avergea + ab / 2;
};

// 100 次操作
// 50 2 4
// 49 2 4
// 48 2 4
// ...
// 0 2 4

/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  if (n == 0) {
    return 0.5;
  }
  // 平均每次分配的数量
  let avergea = (100 + 75 + 50 + 25) / 400; // 0.625
  let avergeb = (25 + 50 + 75) / 400; // 0.375
  // 前m次
  let time = Math.floor((2 * n) / 100);
  // 剩下的n
  let rest = (2 * n) % 100;
  // A：50 B：50 分配的概率为
  // A：0.5 AB：0.25 B：0.25
  // A: 100 B: 100 分配的概率为
  // A: 0.625 AB: 0.1875 B:0.1875
  // A: 150 B:150 分配的概率为
  // A: 0.71875 AB:0.07812 B:
  const dp = new Array(4).fill(0);
  dp[0] = 0.25; // (4,0)
  dp[1] = 0.25; // (3,1)
  dp[2] = 0.25; // (2,2)
  dp[3] = 0.25; // (1,3)
  for (let i = 1; i < time; i++) {}
};

// 100
// 第一步  第二步
// 1        1    A
// 1        2    A
// 1        3    A
// 1        4    A
// 2        1    A
// 2        2    A
// 2        3    A
// 2        4    AB
// 3        1    A
// 3        2    A
// 3        3    AB
// 3        4    B
// 4        1    A
// 4        2    AB
// 4        3    B
// 4        4    B

// (A + AB + B)(A + AB + B) = (A^2 + AAB + AB + AAB + ABAB + ABB + BA + ABB + B^2)
// = (A^2 + 2AAB + AB + BA + ABAB + 2ABB + B^2)
// = (0.5 * 0.5 + 2 * 0.5 * 0.25 + AB + BA + 0.25 * 0.25 + 0.25 * 0.25)
// = (0.5 + AB + BA + 0.0625 + 0.0625)
// = (0.5 + )

/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  // 将分配数量简化为这四种(4,0) (3,1) (2,2) (1,3)
  // 假设dp(i,j)表示A和B分别剩下i和j时所求的概率值，即A先分配完的概率和AB同时分配完的概率除以2
  // dp(i,j) = 0.25 * (dp(i-4, y) + dp(i-3,y-1) + dp(i-2,y-2) + dp(i-1, y-3))
  // 边界情况：i > 0 ，j = 0 B已分配完成，A没有分配完成，dp(i,j) = 0;
  //          i = 0 ，j = 0 A和B同时分配完成，dp(i,j) = 0 + 1 / 2 = 0.5;
  //          i = 0 ，j > 0 A已分配完成，B没有分配，dp(i, j) = 1.0;
  // 在n大于4475(179)时， 通过动态规划求得的概率已经接近0.99999，可以直接返回1
  if (n > 4800) {
    return 1.0;
  }
  n = Math.ceil(n / 25);
  const dp = new Array(n + 1).fill(0).map((v) => new Array(n + 1).fill(0));
  dp[0][0] = 0.5;
  for (let j = 1; j <= n; j++) {
    dp[0][j] = 1.0;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        (dp[Math.max(0, i - 4)][j] +
          dp[Math.max(0, i - 3)][j - 1] +
          dp[Math.max(0, i - 2)][Math.max(0, j - 2)] +
          dp[i - 1][Math.max(0, j - 3)]) /
        4.0;
    }
  }
  return dp[n][n];
};

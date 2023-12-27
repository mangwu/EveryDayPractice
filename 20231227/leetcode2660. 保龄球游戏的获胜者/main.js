// 给你两个下标从 0 开始的整数数组 player1 和 player2 ，分别表示玩家 1 和玩家 2 击中的瓶数。

// 保龄球比赛由 n 轮组成，每轮的瓶数恰好为 10 。

// 假设玩家在第 i 轮中击中 xi 个瓶子。玩家第 i 轮的价值为：

// 如果玩家在该轮的前两轮的任何一轮中击中了 10 个瓶子，则为 2xi 。
// 否则，为 xi 。
// 玩家的得分是其 n 轮价值的总和。

// 返回

// 如果玩家 1 的得分高于玩家 2 的得分，则为 1 ；
// 如果玩家 2 的得分高于玩家 1 的得分，则为 2 ；
// 如果平局，则为 0 。

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let sum1 = 0;
  let sum2 = 0;
  const n = player1.length;
  for (let i = 0; i < n; i++) {
    sum1 += player1[i];
    sum2 += player2[i];
    if (player1[i - 2] === 10 || player1[i - 1] === 10) sum1 += player1[i];
    if (player2[i - 2] === 10 || player2[i - 1] === 10) sum2 += player2[i];
  }
  return sum1 > sum2 ? 1 : sum1 < sum2 ? 2 : 0;
};

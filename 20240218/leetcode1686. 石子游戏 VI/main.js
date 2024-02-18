// Alice 和 Bob 轮流玩一个游戏，Alice 先手。

// 一堆石子里总共有 n 个石子，轮到某个玩家时，他可以 移出 一个石子并得到这个石子的价值。Alice 和 Bob 对石子价值有 不一样的的评判标准 。双方都知道对方的评判标准。

// 给你两个长度为 n 的整数数组 aliceValues 和 bobValues 。aliceValues[i] 和 bobValues[i] 分别表示 Alice 和 Bob 认为第 i 个石子的价值。

// 所有石子都被取完后，得分较高的人为胜者。如果两个玩家得分相同，那么为平局。两位玩家都会采用 最优策略 进行游戏。

// 请你推断游戏的结果，用如下的方式表示：

// 如果 Alice 赢，返回 1 。
// 如果 Bob 赢，返回 -1 。
// 如果游戏平局，返回 0 。
/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
  // 如果alice选择i，bob选择j，那么alice得分为a_i，bob得分为b_j
  // 反之亦然，alice选择j，bob选择i，那么alice得分为a_j，bob得分为b_i
  // 这两种情况下，alice和bob的得分差值分别是：a_i - b_j ，a_j - b_i
  // 对于alice而言，这两个情况应该选择得分差值大的情况，即 a_i - b_j - (a_j - b_i)
  // = a_i + b_i - (a_j + b_j) ，当这个值大于0时，alice优先选择i，这个值小于0时，
  // alice优先选择j，也就是说，alice会优先选择a_i + b_i大的石头，
  // 我们可以创建一个新数组，它记录每个对应的a_i + b_i的值，然后对其进行排序，
  // 优先选择a_i + b_i大的值
  // 同理，对于bob而言，它也应该选择a_i + b_i大的值
  const sum = aliceValues
    .map((v, i) => [v + bobValues[i], v, bobValues[i]])
    .sort((a, b) => b[0] - a[0]);
  const aliceSum = sum
    .filter((v, i) => i % 2 === 0)
    .reduce((pre, cur) => pre + cur[1], 0);
  const bobSum = sum
    .filter((v, i) => i % 2 === 1)
    .reduce((pre, cur) => pre + cur[2], 0);
  return aliceSum > bobSum ? 1 : aliceSum < bobSum ? -1 : 0;
};

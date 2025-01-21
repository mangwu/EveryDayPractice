// 一张桌子上总共有 n 个硬币 栈 。每个栈有 正整数 个带面值的硬币。

// 每一次操作中，你可以从任意一个栈的 顶部 取出 1 个硬币，从栈中移除它，并放入你的钱包里。

// 给你一个列表 piles ，其中 piles[i] 是一个整数数组，分别表示第 i 个栈里 从顶到底 的硬币面值。同时给你一个正整数 k ，请你返回在 恰好 进行 k 次操作的前提下，你钱包里硬币面值之和 最大为多少 。

/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
  const n = piles.length;
  // 可以使用前缀和先计算出每个栈的前缀和，这样可以快速得出每个栈取m个能获得的面值
  
};

// 假设你是一家合金制造公司的老板，你的公司使用多种金属来制造合金。现在共有 n 种不同类型的金属可以使用，并且你可以使用 k 台机器来制造合金。每台机器都需要特定数量的每种金属来创建合金。

// 对于第 i 台机器而言，创建合金需要 composition[i][j] 份 j 类型金属。最初，你拥有 stock[i] 份 i 类型金属，而每购入一份 i 类型金属需要花费 cost[i] 的金钱。

// 给你整数 n、k、budget，下标从 1 开始的二维数组 composition，两个下标从 1 开始的数组 stock 和 cost，请你在预算不超过 budget 金钱的前提下，最大化 公司制造合金的数量。

// 所有合金都需要由同一台机器制造。

// 返回公司可以制造的最大合金数。

/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
  let ans = 0;
  const check = (num, i) => {
    // 对于compostion[i]可以，能否制作出num个合金
    let sum = 0;
    for (let j = 0; j < n; j++) {
      let need = Math.max(composition[i][j] * num - stock[j], 0);
      sum += need * cost[j];
    }
    return sum <= budget;
  };
  for (let i = 0; i < k; i++) {
    // 选择composition[i]机器可以制作的合金数
    // 假设可以制作x份，那么
    // (x * composition[i][j] - stock[j]) *cost[j] <= budget
    // 使用二分法进行查找
    let left = 0;
    let right = budget + Math.max.apply(null, stock);
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (check(mid, i)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    ans = Math.max(ans, right);
  }
  return ans;
};

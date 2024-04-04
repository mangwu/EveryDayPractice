/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  coins.sort((a, b) => a - b);
  let cur = 0; // 当前能到达的最大值
  let ans = 0;
  const n = coins.length;
  for (let i = 0; i < n; i++) {
    const coin = coins[i];
    // cur+1是需求的值
    while (cur + 1 < coin) {
      // 添加cur
      ans++;
      cur = cur * 2 + 1;
      if (cur >= target) return ans;
    }
    cur = cur + coin;
    if (cur >= target) return ans;
  }
  while (cur < target) {
    ans++;
    cur = cur * 2 + 1;
  }
  return ans;
};

//  1 1 3 6 12

// 1 2 3 4 5 6 7 8 9 10 11

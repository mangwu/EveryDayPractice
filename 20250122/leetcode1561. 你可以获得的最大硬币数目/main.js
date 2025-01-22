// 有 3n 堆数目不一的硬币，你和你的朋友们打算按以下方式分硬币：

// 每一轮中，你将会选出 任意 3 堆硬币（不一定连续）。
// Alice 将会取走硬币数量最多的那一堆。
// 你将会取走硬币数量第二多的那一堆。
// Bob 将会取走最后一堆。
// 重复这个过程，直到没有更多硬币。
// 给你一个整数数组 piles ，其中 piles[i] 是第 i 堆中硬币的数目。

// 返回你可以获得的最大硬币数目。

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  const n = piles.length;
  // 能保证bob拿最少的n/3堆硬币
  piles.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < n / 3; i++) {
    res += piles[2 * i + 1];
  }
  return res;
};

// 8 7 6 5 4 2 1 1 1
//

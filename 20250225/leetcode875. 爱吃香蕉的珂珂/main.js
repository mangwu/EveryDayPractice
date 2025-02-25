// 珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

// 珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const check = (k) => {
    // 以速度k吃香蕉需要多少小时
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours <= h;
  };
  let left = 1;
  let right = piles.reduce((a, b) => a + b);
  while (left <= right) {
    const k = Math.floor((left + right) / 2);
    if (check(k)) {
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return left;
};

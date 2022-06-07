/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-07 09:02:07                                                  *
 * @LastModifiedDate: 2022-06-07 21:28:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。
// 警卫已经离开了，将在 h 小时后回来。

// 珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。
// 每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，
// 她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 如果一堆香蕉少于k，那么就按照1小时算
  const n = piles.length;
  let sum = 0;
  let max = 0;
  for (const pile of piles) {
    sum += pile;
    max = Math.max(max, pile);
  }
  if (h == n) {
    return max;
  }
  if (h >= sum) {
    return 1;
  }
  // 排序
  piles.sort((a, b) => a - b);
  // 前面n - i个都是一个小时吃完，那么剩余时间就是 h - (n - i)
  // 在剩余时间内吃完i个属于同样的问题
  // 最终消耗时间一定是小于等于h的 1<k<max
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const n = piles.length;

  // k的最小值为1 最大值为piles中的最大值
  let low = 1;
  let high = 0;
  for (const pile of piles) {
    high = Math.max(high, pile);
  }
  // 如果n和h相等，每个都要1小时吃完，所以k就是high
  if (n == h) {
    return high;
  }
  // 二分查找
  // 因为k是找到最小的值，总时间根据k是递减的
  while (low < high) {
    let mid = (low + high) >> 1;
    // 当k是mid时，求所获得的时间
    let time = getTimes(mid, piles);
    if (time > h) {
      // 不满足要求，mid小了
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};
const getTimes = (k, piles) => {
  // 根据k值获取时间
  let time = 0;
  for (const pile of piles) {
    if (pile % k == 0) {
      time += pile / k;
    } else {
      time += Math.floor(pile / k) + 1;
    }
  }
  return time;
};

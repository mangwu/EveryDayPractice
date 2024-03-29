/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-23 14:26:08                                                  *
 * @LastModifiedDate: 2022-10-23 14:46:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 不同 整数组成的整数数组 arr 和一个整数 k 。

// 每回合游戏都在数组的前两个元素（即 arr[0] 和 arr[1] ）之间进行。比较 arr[0] 与 arr[1] 的大小，较大的整数将会取得这一回合的胜利并保留在位置 0 ，较小的整数移至数组的末尾。当一个整数赢得 k 个连续回合时，游戏结束，该整数就是比赛的 赢家 。

// 返回赢得比赛的整数。

// 题目数据 保证 游戏存在赢家。
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k == 1) {
    return Math.max(arr[0], arr[1]);
  }
  let ans = null;
  let cur = 0;
  let max = Math.max.apply(null, arr);
  while (cur < k) {
    if (arr[0] > arr[1]) {
      if (arr[0] === max) {
        return arr[0];
      }
      ans = arr[0];
      cur++;
      let a = arr.splice(1, 1)[0];
      arr.push(a);
    } else {
      if (arr[1] === max) {
        return arr[1];
      }
      ans = arr[1];
      cur = 1;
      arr.push(arr.shift());
    }
  }
  return ans;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k == 1) {
    return Math.max(arr[0], arr[1]);
  }
  let cur = 0;
  let max = Math.max.apply(null, arr);
  let queue = arr.slice(1);
  let first = arr[0];
  while (cur < k) {
    let nxt = [];
    for (const q of queue) {
      if (first > q) {
        cur++;
        nxt.push(q);
      } else {
        nxt.push(first);
        first = q;
        cur = 1;
      }
      if (first === max || cur >= k) {
        return first;
      }
    }
    queue = nxt;
  }
};

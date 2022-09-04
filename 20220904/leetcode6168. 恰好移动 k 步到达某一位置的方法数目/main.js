/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-04 10:38:55                                                  *
 * @LastModifiedDate: 2022-09-04 12:11:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 正 整数 startPos 和 endPos 。最初，你站在 无限 数轴上位置 startPos 处。
// 在一步移动中，你可以向左或者向右移动一个位置。

// 给你一个正整数 k ，返回从 startPos 出发、恰好 移动 k 步并到达 endPos 的 不同 方法数目。
// 由于答案可能会很大，返回对 109 + 7 取余 的结果。

// 如果所执行移动的顺序不完全相同，则认为两种方法不同。

// 注意：数轴包含负整数。
const max = Math.pow(10, 9) + 7;
const hash = new Map();
/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (startPos, endPos, k) {
  if (Math.abs(endPos - startPos) > k) {
    return 0;
  }
  if ((startPos + endPos + k) % 2 == 1) {
    return 0;
  }
  if (Math.abs(endPos - startPos) == k) {
    return 1;
  }
  const key1 = startPos - 1;
  const key2 = startPos + 1;
  let left = 0;
  let right = 0;
  if (hash.has(key1)) {
    const vals = hash.get(key1);
    if (vals[k - 1] !== -1) {
      left = vals[k - 1];
    } else {
      left = numberOfWays(startPos - 1, endPos, k - 1);
      vals[k - 1] = left % max;
    }
  } else {
    const vals = new Array(1001).fill(-1);
    left = numberOfWays(startPos - 1, endPos, k - 1);
    vals[k - 1] = left % max;
    hash.set(key1, vals);
  }
  if (hash.has(key2)) {
    const vals = hash.get(key2);
    if (vals[k - 1] !== -1) {
      right = vals[k - 1];
    } else {
      right = numberOfWays(startPos + 1, endPos, k - 1);
      vals[k - 1] = right % max;
    }
  } else {
    const vals = new Array(1001).fill(-1);
    right = numberOfWays(startPos + 1, endPos, k - 1);
    vals[k - 1] = right % max;
    hash.set(key2, vals);
  }
  return (left + right) % max;
};
// 2 3 4 5
// 10
// 1 2 3

// a             b
// k
// a - x + b - x == k    a + b - k / 2
// b - a + 2n == k       k + a - b / 2
// x - b + x - a == k    k + a + b / 2

// 4 5 10
// 1 2 3 4 5 10

// 0 1 2 3 2    4
// 0 1 2 1 2
// 0 1 0 1 2
//

// 1 3   6
// 1 2 3 4 5

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (startPos, endPos, k) {
  if (startPos + k < endPos) {
    return 0;
  }
  if ((startPos + endPos + k) % 2 == 1) {
    return 0;
  }
  if (Math.abs(endPos - startPos) == k) {
    return 1;
  }
  if (k <= 0) {
    return 0;
  }
  const key = Math.abs(endPos - startPos);
  if (hash.has(key)) {
    const arr = hash.get(key);
    if (arr[k] !== -1) {
      return arr[k];
    } else {
      const left = numberOfWays(startPos - 1, endPos, k - 1);
      const right = numberOfWays(startPos + 1, endPos, k - 1);
      arr[k] = (left + right) % max;
      return arr[k];
    }
  } else {
    const arr = new Array(1001).fill(-1);
    const left = numberOfWays(startPos - 1, endPos, k - 1);
    const right = numberOfWays(startPos + 1, endPos, k - 1);
    arr[k] = (left + right) % max;
    return arr[k];
  }
};

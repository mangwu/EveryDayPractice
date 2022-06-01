/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-01 09:11:15                                                  *
 * @LastModifiedDate: 2022-06-01 10:14:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。
// 你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，
// 但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。

// 如果你能使这个正方形，则返回 true ，否则返回 false 。

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  // 关键条件，每根火柴必须使用一次
  // 正方形边长就可以很好求出
  if (matchsticks.length < 4) {
    return false;
  }
  const hash = new Map();
  let sum = 0;
  let max = 0;
  for (const s of matchsticks) {
    sum += s;
    max = Math.max(s, max);
    if (hash.has(s)) {
      hash.set(s, hash.get(s) + 1);
    } else {
      hash.set(s, 1);
    }
  }
  if (sum % 4 !== 0 || sum / 4 < max) {
    return false;
  }
  let side = sum / 4;
  const dfs = (last, idx) => {
    if (idx == 4 && last == side) {
      return true;
    }
    let ans = false;
    for (const [key, val] of hash.entries()) {
      if (key < last && val > 0) {
        hash.set(key, val - 1);
        ans = ans || dfs(last - key, idx);
        hash.set(key, val);
      } else if (key == last && val > 0) {
        hash.set(key, val - 1);
        ans = ans || dfs(side, idx + 1);
        hash.set(key, val);
      }
    }
    return ans;
  };
  return dfs(side, 0);
};

// 9 36
// 9 9 9 9
// 8 7 3 8 8 2
// 1 2 3 4 5 6 7 8 9 10 11 12

// 8 1
// 5 4
// 3 3 2 1
//

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  // 关键条件，每根火柴必须使用一次
  // 正方形边长就可以很好求出
  if (matchsticks.length < 4) {
    return false;
  }
  let sum = 0;
  let max = 0;
  for (const s of matchsticks) {
    sum += s;
    max = Math.max(s, max);
  }
  if (sum % 4 !== 0 || sum / 4 < max) {
    return false;
  }
  let side = sum / 4;
  // 使用hash表进行回溯时间复杂度过高, 可以使用原始的matchsticks排序后进行选择
  matchsticks.sort((a, b) => b - a); // 大 -> 小
  // 用于保存边长大小
  const edges = new Array(4).fill(0);
  return dfs(0, matchsticks, edges, side);
};
const dfs = (index, matchsticks, edges, side) => {
  if (index == matchsticks.length) {
    // 已经选择了全部火柴
    return true;
  }
  // 遍历选择火柴
  for (let i = 0; i < edges.length; i++) {
    edges[i] += matchsticks[index];
    if (edges[i] <= side && dfs(index + 1, matchsticks, edges, side)) {
      return true;
    }
    edges[i] -= matchsticks[index];
  }
  return false;
};

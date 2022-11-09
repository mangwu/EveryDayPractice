/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-09 08:52:28                                                  *
 * @LastModifiedDate: 2022-11-09 09:30:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  // 如果n是偶数，那么最大加号不会因为mines而改变
  if (n % 2 === 0) {
    return n / 2;
  }
  // n是奇数，需要判断mines是否在中间最大的加号上
  let ans = (n + 1) / 2;
  let k = Math.floor(n / 2);
  if (mines[0] === k || mines[1] === k) {
    ans--;
  }
  return ans;
};

// 111
// 101
// 111

// 1111
// 1111
// 1111
// 1111

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  if (mines.length == 0) {
    return Math.ceil(n / 2);
  }
  if (mines.length === n ** 2) {
    return 0;
  }
  const visited = [];
  let max = Math.ceil(n / 2);
  let k = Math.floor(n / 2);
  for (const mine of mines) {
    if (mine[0] === k || mine[1] === k) {
      max = k;
    }
    visited[mine[0] * n + mine[1]] = true;
  }

  const getMaxPlusSign = function (x, y) {
    let ans = 1;
    let top = x - 1;
    let bottom = x + 1;
    let left = y - 1;
    let right = y + 1;
    while (top >= 0 && bottom < n && left >= 0 && right < n) {
      if (
        !visited[top * n + y] &&
        !visited[bottom * n + y] &&
        !visited[x * n + left] &&
        !visited[x * n + right]
      ) {
        ans++;
        top--;
        bottom++;
        left--;
        right++;
      } else {
        break;
      }
    }
    return ans;
  };
  let res = 1;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let cur = Math.min(i + 1, j + 1, n - i, n - j);
      if (cur <= res || visited[i * n + j]) {
        continue;
      }
      let curMax = getMaxPlusSign(i, j);
      res = Math.max(res, curMax);
      if (res === max) {
        return res;
      }
    }
  }
  return res;
};

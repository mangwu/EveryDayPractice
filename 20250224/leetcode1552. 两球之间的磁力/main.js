/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 09:25:53                                                  *
 * @LastModifiedDate: 2025-02-24 09:33:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。Rick 有 n 个空的篮子，第 i 个篮子的位置在 position[i] ，Morty 想把 m 个球放到这些篮子里，使得任意两球间 最小磁力 最大。

// 已知两个球如果分别位于 x 和 y ，那么它们之间的磁力为 |x - y| 。

// 给你一个整数数组 position 和一个整数 m ，请你返回最大化的最小磁力。

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  position.sort((a, b) => a - b);
  const n = position.length;
  let left = 1;
  let right = position[n - 1] - position[0];
  const check = (mid) => {
    let pre = position[0];
    let cnt = m - 1;
    for (let i = 1; i < n; i++) {
      if (position[i] - pre >= mid) {
        pre = position[i];
        cnt--;
      }
      if (cnt === 0) break;
    }
    return cnt === 0;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

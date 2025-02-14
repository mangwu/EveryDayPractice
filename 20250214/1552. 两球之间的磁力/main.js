/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 23:20:58                                                  *
 * @LastModifiedDate: 2025-02-14 23:32:06                                      *
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
  // 二分查找
  position.sort((a, b) => a - b);
  const n = position.length;
  // 求最大的最小磁力
  let left = 1;
  let right = position[n - 1] - position[0];
  const findPos = (target) => {
    // 找到第一个大于等于target的位置
    let left = 0;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (position[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  };
  const check = (mid) => {
    // 保证最小磁力为mid，检查能否安排出来m的排列
    let curPos = position[0];
    let left = m - 1;
    while (left) {
      // 要求能找到下一个大于等于curPos + mid的位置
      const nextPosIdx = findPos(curPos + mid);
      if (nextPosIdx === n) return false;
      curPos = position[nextPosIdx];
      left--;
    }
    return true;
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

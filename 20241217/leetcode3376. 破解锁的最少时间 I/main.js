/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-17 16:06:01                                                  *
 * @LastModifiedDate: 2024-12-17 17:39:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Bob 被困在了一个地窖里，他需要破解 n 个锁才能逃出地窖，每一个锁都需要一定的 能量 才能打开。每一个锁需要的能量存放在一个数组 strength 里，其中 strength[i] 表示打开第 i 个锁需要的能量。

// Bob 有一把剑，它具备以下的特征：

// 一开始剑的能量为 0 。
// 剑的能量增加因子 X 一开始的值为 1 。
// 每分钟，剑的能量都会增加当前的 X 值。
// 打开第 i 把锁，剑的能量需要到达 至少 strength[i] 。
// 打开一把锁以后，剑的能量会变回 0 ，X 的值会增加一个给定的值 K 。
// 你的任务是打开所有 n 把锁并逃出地窖，请你求出需要的 最少 分钟数。

// 请你返回 Bob 打开所有 n 把锁需要的 最少 时间。

/**
 * @param {number[]} strength
 * @param {number} K
 * @return {number}
 */
var findMinimumTime = function (strength, K) {
  strength.sort((a, b) => a - b);
  let x = 1; // 每分钟的增量
  let curEn = 0; // 当前能量
  let res = 0;
  for (const num of strength) {
    while (curEn < num) {
      curEn += x;
      res++;
    }
    curEn = 0;
    x += K;
  }
  return res;
};

// [2,4,4,8,12,36]
// 8
// 时间  能量   X   操作  更新X
// 0     0      1   n     1
// 1     1      1   n     1
// 2     2      1   2     9
// 3     9      9   8     17
// 4     17     17  12    25
// 5     25     25  4     33
// 6     33     33  4     41
// 7     41     41  36    49

// 时间  能量   X   操作  更新X
// 0     0      1   n     1
// 1     1      1   n     1
// 2     2      1   2     9
// 3     9      9   4     17
// 4     17     17  4    25
// 5     25     25  8     33
// 6     33     33  12     41
// 7     41     41  36    49

/**
 * @param {number[]} strength
 * @param {number} K
 * @return {number}
 */
var findMinimumTime = function (strength, K) {
  strength.sort((a, b) => a - b);
  console.log(strength);
  const n = strength.length;
  let x = 1; // 每分钟的增量
  let curEn = 0; // 当前能量
  let res = 0;
  // 每次选择的能量是当前能到达的最大的能量
  // 双指针解决，left指针指向左边还未解锁的小值，right指针指向当前能到达的最大的值索引
  let left = 0;
  let right = 0;
  let visited = new Array(n).fill(false);
  let unLockNum = 0;
  while (unLockNum < n) {
    // 找到左边未解锁的最小值
    while (visited[left]) left++;
    // 增加curEn，使其大于strength[left]
    while (left < n && curEn < strength[left]) {
      curEn += x;
      res++;
    }
    // 寻找当前curEn能到达的解锁最大索引值
    while (right < n && !visited[right] && curEn >= strength[right]) right++;
    if (!visited[right - 1]) {
      // 解锁右边的一个大值，可能和left等同
      visited[right - 1] = true;
      unLockNum++;
      curEn = 0;
      x += K;
    } else {
      // 需要倒叙处理前面没解锁过的元素
      right--;
      while (right >= left) {
        if (!visited[right] && curEn > strength[right]) {
          break;
        }
        right--;
      }
      visited[right++] = true;
      unLockNum++;
      curEn = 0;
      x += K;
    }
  }
  return res;
};

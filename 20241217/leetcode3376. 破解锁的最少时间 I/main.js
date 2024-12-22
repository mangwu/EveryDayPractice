/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-17 16:06:01                                                  *
 * @LastModifiedDate: 2024-12-18 17:48:39                                      *
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
  // console.log(strength);
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
    while (right < n && curEn >= strength[right]) right++;
    if (!visited[right - 1]) {
      // 解锁右边的一个大值，可能和left等同
      // console.table({
      //   当前时间: res,
      //   当前能量: curEn,
      //   解锁能量: `${strength[right - 1]}(${right - 1})`,
      //   当前增量: x,
      //   左边选择: `${strength[left]}(${left})`,
      // });
      visited[right - 1] = true;
      unLockNum++;
      curEn = 0;
      x += K;
      // console.log(visited);
    } else {
      // 需要倒叙处理前面没解锁过的元素
      right--;
      while (right > left) {
        if (!visited[right] && curEn > strength[right]) {
          break;
        }
        right--;
      }
      // console.table({
      //   当前时间: res,
      //   当前能量: curEn,
      //   解锁能量: `${strength[right]}(${right})`,
      //   当前增量: x,
      //   左边选择: `${strength[left]}(${left})`,
      // });
      visited[right++] = true;
      unLockNum++;
      curEn = 0;
      x += K;
      // console.log(visited);
    }
  }
  return res;
};

// [5,5,15,35]
// 7

// 时间  能量   X   操作  更新X
// 0     0      1   n     1
// 1     1      1   n     2
// 2     2      1   n     3
// 3     3      1   n     4
// 4     4      1   n     5
// 5     5      1   5     8
// 6     8      8   5     15
// 7     15     15  15    22
// 8     16     8   15    15

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
    while (right < n && curEn >= strength[right]) right++;
    if (!visited[right - 1]) {
      // 解锁右边的一个大值，可能和left等同
      console.table({
        当前时间: res,
        当前能量: curEn,
        解锁能量: `${strength[right - 1]}(${right - 1})`,
        当前增量: x,
        左边选择: `${strength[left]}(${left})`,
      });
      visited[right - 1] = true;
      unLockNum++;
      curEn = 0;
      x += K;
      console.log(visited);
    } else {
      // 需要倒叙处理前面没解锁过的元素
      right--;
      while (right > left) {
        if (!visited[right] && curEn > strength[right]) {
          break;
        }
        right--;
      }
      console.table({
        当前时间: res,
        当前能量: curEn,
        解锁能量: `${strength[right]}(${right})`,
        当前增量: x,
        左边选择: `${strength[left]}(${left})`,
      });
      visited[right++] = true;
      unLockNum++;
      curEn = 0;
      x += K;
      console.log(visited);
    }
  }
  return res;
};

// [3, 6, 7, 18, 22, 50]
// 4

// 时间  能量   X   操作  更新X
// 0     0      1   n     1
// 1     1      1   n     1
// 2     2      1   n     1
// 3     3      1   3     5
// 4     5      5   n     5
// 5     10     5   7     9
// 6     9      9   6     13
// 7     13     13  n     13
// 8     26     13  22    17
// 9     17     17  n     17
// 10    34     17  22    21
// 11    21     21  n     21
// 12    42     21  n     21
// 13    63     21  50    25

// [3, 6, 7, 18, 22, 50]
// 4
// 时间  能量   X   操作  更新X
// 0     0      1   n     1
// 1     1      1   n     1
// 2     2      1   n     1
// 3     3      1   3     5
// 4     5      5   n     5
// 5     10     5   7     9
// 6     9      9   6     13
// 7     13     9   n     13
// 8     26     13  22    17
// 9     17     13  n     17
// 10    34     17  n     17
// 11    51     17  51    21
// 12    21     21  18    24

/**
 * @param {number[]} strength
 * @param {number} K
 * @return {number}
 */
var findMinimumTime = function (strength, K) {
  strength.sort((a, b) => a - b);
  // 此题没有明确的贪心方式可选，或者说贪心比较困难，
  // 前面的解法试图优先选取当前能量能到达的最大锁进行开启，实际上并非最好方式
  // 使用暴力解法，每次从剩下的锁中选一个进行解锁
  const n = strength.length;
  const visited = new Array(n).fill(false);
  let res = Infinity;
  const dfs = (x, curTime, unLockNum) => {
    if (curTime > res) return; // 剪枝，不用继续选择
    if (unLockNum === n) {
      res = Math.min(res, curTime);
      return;
    }
    for (let i = 0; i < n; i++) {
      // 选择当前
      if (!visited[i]) {
        visited[i] = true;
        dfs(x + K, curTime + Math.ceil(strength[i] / x), unLockNum + 1);
        visited[i] = false;
      }
    }
  };
  dfs(1, 0, 0);
  return res;
};

/**
 * @param {number[]} strength
 * @param {number} K
 * @return {number}
 */
var findMinimumTime = function (strength, K) {
  // 将深度优先搜索改成记忆化搜索
  // 记录的情况是：对于strength中的每个元素，使用索引表示，集合U为未解锁的元素
  // dfs(U)返回打开U中未解锁元素的最少时间
  // 递归的边界出口是当U是空集的时候，dfs(ф)=0
  // 那么如何获取dfs(U)：
  // 1. 假设U中有n个元素
  // 2. 遍历这个n个元素，每次选择一个元素j进行解锁
  // 3. 计算每个dfs(U - j)的值，然后取strength[j] / x + dfs(U - j)的最小值即可
  // x的计算：strength长度为n，当前未解锁集合U元素个数m，那么x = K * (n - m) + 1
  // 将集合U进行状态压缩：因为strength的长度最大为8，所以可以用8位的二进制数表示，0表示已解锁，1表示未解锁
  // 初始集合最大为(11111111)_2 = 255，解锁集合为0
  const n = strength.length;
  const max = 2 ** n;
  const cache = new Array(max).fill(-1);
  cache[0] = 0; // 出口
  const dfs = (mask) => {
    if (cache[mask] !== -1) return cache[mask];
    const oneBitCount = bitCount(mask);
    let res = Infinity;
    for (let i = 0; i < n; i++) {
      if (((mask >> i) & 1) === 1) {
        res = Math.min(
          res,
          Math.ceil(strength[i] / n - oneBitCount) + dfs(mask - (1 << i))
        );
      }
    }
    cache[mask] = res;
    return cache[mask];
  };
  return dfs(max - 1);
};

function bitCount(num) {
  let res = 0;
  while (num) {
    if (num & (1 === 1)) res++;
    num = num >> 1;
  }
  return res;
}

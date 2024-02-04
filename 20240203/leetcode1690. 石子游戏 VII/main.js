/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-03 22:56:44                                                  *
 * @LastModifiedDate: 2024-02-04 10:29:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 石子游戏中，爱丽丝和鲍勃轮流进行自己的回合，爱丽丝先开始 。

// 有 n 块石子排成一排。每个玩家的回合中，可以从行中 移除 最左边的石头或最右边的石头，并获得与该行中剩余石头值之 和 相等的得分。当没有石头可移除时，得分较高者获胜。

// 鲍勃发现他总是输掉游戏（可怜的鲍勃，他总是输），所以他决定尽力 减小得分的差值 。爱丽丝的目标是最大限度地 扩大得分的差值 。

// 给你一个整数数组 stones ，其中 stones[i] 表示 从左边开始 的第 i 个石头的值，如果爱丽丝和鲍勃都 发挥出最佳水平 ，请返回他们 得分的差值 。

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  // 一次操作只有四种情况：ll,lr, rl ,rr
  // 这四种情况的
  const n = stones.length;
  const prefix = [0];
  for (const stone of stones) prefix.push(stone + prefix[prefix.length - 1]);
  let left = 0;
  let right = n - 1;
  let alice = 0;
  let bob = 0;
  while (left < right) {
    if (right - left === 2) {
      // 3个元素
      if (stones[left] < stones[right]) {
        alice += stones[left + 1] + stones[right];
        bob += Math.max(stones[left + 1], stones[right]);
      } else {
        alice += stones[left + 1] + stones[left];
        bob += Math.max(stones[left + 1], stones[left]);
      }
      break;
    } else if (right - left === 1) {
      alice += Math.max(stones[left], stones[right]);
      break;
    }
    // ll，lr
    const ll = stones[left + 1];
    const lr = stones[right];
    // rl，rr
    const rl = stones[left];
    const rr = stones[right - 1];
    if (Math.min(ll, lr) > Math.min(rl, rr)) {
      // alice选择移除左边
      if (ll < lr) {
        alice += ll;
        left += 2;
      } else {
        alice += lr;
        left++;
        right--;
      }
    } else {
      if (rl < rr) {
        alice += rl;
        right--;
        left++;
      } else {
        alice += rr;
        right -= 2;
      }
    }
  }
  return alice - bob;
};

// 上述解答错误

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  const n = stones.length;
  const cache = new Array(n).fill(0).map((v) => new Array(n).fill(-1));
  const dfs = (left, right) => {
    if (left > right) return 0;
    if (cache[left][right] !== -1) return cache[left][right];
    const res = Math.max()
  };
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-20 14:32:51                                                  *
 * @LastModifiedDate: 2022-01-20 18:42:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Alice 和 Bob 再次设计了一款新的石子游戏。现有一行 n 个石子，每个石子都有一个关联的数字表示它的价值。给你一个整数数组 stones ，其中 stones[i] 是第 i 个石子的价值。

// Alice 和 Bob 轮流进行自己的回合，Alice 先手。每一回合，玩家需要从 stones 中移除任一石子。

// 如果玩家移除石子后，导致 所有已移除石子 的价值 总和 可以被 3 整除，那么该玩家就 输掉游戏 。
// 如果不满足上一条，且移除后没有任何剩余的石子，那么 Bob 将会直接获胜（即便是在 Alice 的回合）。
// 假设两位玩家均采用 最佳 决策。如果 Alice 获胜，返回 true ；如果 Bob 获胜，返回 false 。

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  // 每轮尽量选择移除后旗子之后不是3倍数的石子
  // 棋子移除完，当stones和不为3的倍数时，B必胜
  // 计算每个价值mod3的值
  // 数组长度
  const len = stones.length;
  // 和值
  let sum = 0;
  // 余数为0，1，2的个数
  let mod0 = 0;
  let mod1 = 0;
  let mod2 = 0;
  for (let stone of stones) {
    if (stone % 3 === 0) {
      mod0++;
      continue;
    }
    if (stone % 3 === 1) {
      mod1++;
      continue;
    }
    mod2++;
  }
  console.log(mod0, mod1, mod2);
  const flag = mod0 % 2 === 0 ? mod1 > mod2 : mod1 < mod2;
  // 模拟：mod0 mod1 mod2个数情况
  //  1 1 2  => alice选择mod1 bob选择 mod0; alice 选择
  // 遍历n次进行石头游戏
  for (let i = 0; i < len; i++) {
    console.log(mod0, mod1, mod2, sum);
    // i为偶数是Alice轮次，i为奇数是Bob轮次
    // alice有先手优势，可以选择数量少的mod
    if (sum !== 0 && mod0 > 0) {
      mod0--;
      continue;
    }
    if (flag) {
      // mod1个数多
      if (sum !== 1 && mod2 > 0) {
        mod2--;
        sum = (sum + 2) % 3;
        continue;
      }
      if (sum !== 2 && mod1 > 0) {
        mod1--;
        sum++;
        continue;
      }
    } else {
      // mod2个数多
      if (sum !== 2 && mod1 > 0) {
        mod1--;
        sum++;
        continue;
      }
      if (sum !== 1 && mod2 > 0) {
        mod2--;
        sum = (sum + 2) % 3;
        continue;
      }
    }
    // 没有可选的，必然是3的倍数，根据idx返回结果
    if (i % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }

  return false;
};
// 4 4 2 // 2 0 2 1 1
// 3 1 5 //
// 8 2 4
console.log(stoneGameIX([3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 2, 2, 2]));
// 不同情况下，alice作为先手，其选择会不同可能导致不同情况
// [20,3,20,17,2,12,15,17,4]
// 2 2 2 2 2 1
/**
 * 1.对于mod0，其奇偶性决定了主动性，如果为偶数，alice一直掌握主动性，而为奇数那么bob掌握主动性
 * 2.当sum === 0时，alice在mod1 和mod2中选择，
 *    如果mod1 个数大于 mod2
 *
 * */

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX2 = function (stones) {
  // 每轮尽量选择移除后旗子之后不是3倍数的石子
  // 棋子移除完，当stones和不为3的倍数时，B必胜
  // 计算每个价值mod3的值
  // 余数为0，1，2的个数
  let mod0 = 0;
  let mod1 = 0;
  let mod2 = 0;
  for (let stone of stones) {
    if (stone % 3 === 0) {
      mod0++;
      continue;
    }
    if (stone % 3 === 1) {
      mod1++;
      continue;
    }
    mod2++;
  }
  if (mod0 % 2 === 0) {
    // mod0为偶数，主动性在alice上，只要mod1和mod2都大于0alice才能赢
    if (mod1 > 0 && mod2 > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    // mod0为奇数的情况 mod1和mod2的差值数量大于3alice才能赢下比赛
    if (Math.abs(mod1 - mod2) >= 3) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX3 = function (stones) {
  // 每轮尽量选择移除后旗子之后不是3倍数的石子
  // 棋子移除完，当stones和不为3的倍数时，B必胜
  // 计算每个价值mod3的值
  // 余数为0，1，2的个数
  // 简化版本
  const mod = [0, 0, 0];
  for (let st of stones) {
    mod[st % 3]++;
  }
  return mod[0] % 2 === 0
    ? mod[1] > 0 && mod[2] > 0
    : Math.abs(mod[1] - mod[2]) > 2;
};

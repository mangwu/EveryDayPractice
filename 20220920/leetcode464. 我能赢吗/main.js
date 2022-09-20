/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-20 10:50:22                                                  *
 * @LastModifiedDate: 2022-09-20 17:05:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，
// 先使得累计整数和 达到或超过  100 的玩家，即为胜者。

// 如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？

// 例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。

// 给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），
// 若先出手的玩家是否能稳赢则返回 true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  // 状态压缩，加记忆化搜索
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false;
  }
  const hash = new Map();
  const dfs = (usedNumber, total) => {
    if (hash.has(usedNumber)) {
      return hash.get(usedNumber);
    }
    let res = false;
    for (let i = 0; i < maxChoosableInteger; i++) {
      // 当前数字未被选取
      if (((usedNumber >>> i) & 1) === 0) {
        // 当前选取的就能赢，那么返回true
        if (i + 1 + total >= desiredTotal) {
          res = true;
          break;
        }
        // 当前选取的能让对方不赢
        if (!dfs((1 << i) | usedNumber, total + i + 1)) {
          res = true;
          break;
        }
      }
    }
    hash.set(usedNumber, res);
    return res;
  };
  return dfs(0, 0);
};

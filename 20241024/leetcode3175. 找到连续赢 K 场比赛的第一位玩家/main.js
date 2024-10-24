/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-24 10:27:53                                                  *
 * @LastModifiedDate: 2024-10-24 15:30:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 位玩家在进行比赛，玩家编号依次为 0 到 n - 1 。

// 给你一个长度为 n 的整数数组 skills 和一个 正 整数 k ，其中 skills[i] 是第 i 位玩家的技能等级。skills 中所有整数 互不相同 。

// 所有玩家从编号 0 到 n - 1 排成一列。

// 比赛进行方式如下：

// 队列中最前面两名玩家进行一场比赛，技能等级 更高 的玩家胜出。
// 比赛后，获胜者保持在队列的开头，而失败者排到队列的末尾。
// 这个比赛的赢家是 第一位连续 赢下 k 场比赛的玩家。

// 请你返回这个比赛的赢家编号。

/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function (skills, k) {
  const n = skills.length;
  let m = 0; // 当前比较次数
  let pre = 0; // 前面的最大值索引
  for (let i = 1; i < n; i++) {
    if (skills[i] > skills[pre]) {
      m = 1;
      pre = i;
    } else {
      m++;
    }
    if (m == k) return pre;
  }
  return pre;
};

/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-04 22:22:35                                                  *
 * @LastModifiedDate: 2022-12-04 22:43:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 skill ，数组长度为 偶数 n ，其中 skill[i] 表示第 i 个玩家的技能点。将所有玩家分成 n / 2 个 2 人团队，使每一个团队的技能点之和 相等 。

// 团队的 化学反应 等于团队中玩家的技能点 乘积 。

// 返回所有团队的 化学反应 之和，如果无法使每个团队的技能点之和相等，则返回 -1 。

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  skill.sort((a, b) => a - b);
  // 首尾之和必须相等
  const n = skill.length;
  let sum = skill[0] + skill[n - 1];
  let ans = skill[0] * skill[n - 1];
  for (let i = 1; i < n / 2; i++) {
    if (skill[i] + skill[n - i - 1] !== sum) {
      return -1;
    }
    ans += skill[i] * skill[n - i - 1];
  }
  return ans;
};

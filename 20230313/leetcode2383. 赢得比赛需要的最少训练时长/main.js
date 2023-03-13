/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-13 08:38:09                                                  *
 * @LastModifiedDate: 2023-03-13 09:07:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你正在参加一场比赛，给你两个 正 整数 initialEnergy 和 initialExperience 分别表示你的初始精力和初始经验。

// 另给你两个下标从 0 开始的整数数组 energy 和 experience，长度均为 n 。

// 你将会 依次 对上 n 个对手。第 i 个对手的精力和经验分别用 energy[i] 和 experience[i] 表示。当你对上对手时，需要在经验和精力上都 严格 超过对手才能击败他们，然后在可能的情况下继续对上下一个对手。

// 击败第 i 个对手会使你的经验 增加 experience[i]，但会将你的精力 减少  energy[i] 。

// 在开始比赛前，你可以训练几个小时。每训练一个小时，你可以选择将增加经验增加 1 或者 将精力增加 1 。

// 返回击败全部 n 个对手需要训练的 最少 小时数目。
/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  const n = energy.length;
  let energySum = 0;
  let experienceSum = 0;
  let minExp = 0;
  for (let i = 0; i < n; i++) {
    energySum += energy[i];
    minExp = Math.max(experience[i] - experienceSum + 1, minExp);
    experienceSum += experience[i];
  }
  let res = 0;
  if (energySum >= initialEnergy) res += energySum - initialEnergy + 1;
  if (minExp > initialExperience) res += minExp - initialExperience;
  return res;
};

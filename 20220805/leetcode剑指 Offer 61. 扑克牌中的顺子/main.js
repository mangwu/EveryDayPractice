/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-05 16:35:24                                                  *
 * @LastModifiedDate: 2022-08-05 16:44:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  // 只有五张牌
  nums.sort((a, b) => a - b);
  // 记录0的数量
  let zeros = 0;
  let idx = 0;
  while (nums[idx] == 0) {
    idx++;
    zeros++;
  }
  if (zeros >= 4) {
    return true;
  }
  for (; idx < 4; idx++) {
    // 两张牌的差值
    const sub = nums[idx + 1] - nums[idx];
    // 需要补牌
    if (sub > 1) {
      if (zeros >= sub - 1) {
        zeros = zeros - sub + 1;
        continue;
      } else {
        return false;
      }
    }
    if (sub == 0) {
      // 不能是相同牌
      return false;
    }
  }
  return true;
};

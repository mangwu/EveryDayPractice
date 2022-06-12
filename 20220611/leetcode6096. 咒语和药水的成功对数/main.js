/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-11 23:31:42                                                  *
 * @LastModifiedDate: 2022-06-11 23:49:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，
// 其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。

// 同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，
// 那么它们视为一对 成功 的组合。

// 请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  // 二分查找
  potions.sort((a, b) => a - b);
  const pLen = potions.length;
  let ans = [];
  for (const spell of spells) {
    let target = success / spell;
    // 找到第一个比target大的数
    let left = 0;
    let right = pLen;
    // [left, right)
    while (left < right) {
      let mid = (left + right) >> 1;
      if (target > potions[mid]) {
        // 不比left大
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    ans.push(pLen - right);
  }
  return ans;
};

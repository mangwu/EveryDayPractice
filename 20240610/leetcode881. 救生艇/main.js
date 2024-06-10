/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-10 22:33:23                                                  *
 * @LastModifiedDate: 2024-06-10 22:42:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定数组 people 。people[i]表示第 i 个人的体重 ，船的数量不限，每艘船可以承载的最大重量为 limit。

// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

// 返回 承载所有人所需的最小船数 。

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  const n = people.length;
  people.sort((a, b) => b - a);
  // 重量大的优先和重量小的组合
  let ans = 0;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (left === right) {
      ans++;
      break;
    }
    if (people[left] + people[right] <= limit) {
      ans++;
      left++;
      right--;
    } else {
      ans++;
      left++;
    }
  }
  return ans;
};

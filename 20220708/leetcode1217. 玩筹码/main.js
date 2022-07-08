/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-08 09:08:52                                                  *
 * @LastModifiedDate: 2022-07-08 09:25:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个筹码。第 i 个筹码的位置是 position[i] 。

// 我们需要把所有筹码移到同一个位置。
// 在一步中，我们可以将第 i 个筹码的位置从 position[i] 改变为:

// position[i] + 2 或 position[i] - 2 ，此时 cost = 0
// position[i] + 1 或 position[i] - 1 ，此时 cost = 1
// 返回将所有筹码移动到同一位置上所需要的 最小代价 。

// [1,2,3,1,2,2,2,3,4,4,5,2,1, 3, 3]
// 1 1 1
// 2 2 2 2 2
// 3 3 3 3
// 4 4
// 5

// 3 + 2 + 1

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  const hash = new Map();
  const n = position.length;
  for (let i = 0; i < n; i++) {
    if (hash.has(position[i])) {
      let num = hash.get(position[i]);
      hash.set(position[i], num + 1);
    } else {
      hash.set(position[i], 1);
    }
  }
  // 如果移动到奇数位，无论哪个奇数位，都花费0,而偶数位每个筹码必花费1
  // 如果移动到偶数位，无论哪个偶数位，都花费0，而奇数位每个筹码必花费1
  let oddMin = 0;
  let evenMin = 0;
  for (const [key, val] of hash) {
    // 如果移动到奇数位，需要计算偶数位的花费
    if (key % 2 == 0) {
      evenMin += val;
    } else {
      // 如果移动到偶数位，需要计算奇数位的花费
      oddMin += val;
    }
  }
  return Math.min(oddMin, evenMin);
};

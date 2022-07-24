/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-23 20:38:30                                                  *
 * @LastModifiedDate: 2022-07-23 22:29:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为 n 的整数数组 nums ，其中 nums 是范围为 [1，n] 的整数的排列。
// 还提供了一个 2D 整数数组 sequences ，其中 sequences[i] 是 nums 的子序列。
// 检查 nums 是否是唯一的最短 超序列 。最短 超序列 是 长度最短 的序列，
// 并且所有序列 sequences[i] 都是它的子序列。对于给定的数组 sequences ，可能存在多个有效的 超序列 。

// 例如，对于 sequences = [[1,2],[1,3]] ，有两个最短的 超序列 ，[1,2,3] 和 [1,3,2] 。
// 而对于 sequences = [[1,2],[1,3],[1,2,3]] ，唯一可能的最短 超序列 是 [1,2,3]
// 。[1,2,3,4] 是可能的超序列，但不是最短的。
// 如果 nums 是序列的唯一最短 超序列 ，则返回 true ，否则返回 false 。
// 子序列 是一个可以通过从另一个序列中删除一些元素或不删除任何元素，而不改变其余元素的顺序的序列。

/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function (nums, sequences) {
  // 包装nums中的顺序，在sequences中只有一条可行的路径
  // 检查每个相邻的关系是否都出现过即可
  // 两个相邻的关系可以将pre右移14位后和next相与获得，因为n <= 10^4
  const set = new Set();
  for (const sequence of sequences) {
    const len = sequence.length;
    for (let i = 1; i < len; i++) {
      set.add(hash(sequence[i - 1], sequence[i]));
    }
  }
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (!set.has(hash(nums[i - 1], nums[i]))) {
      return false;
    }
  }
  return true;
};

const hash = (pre, next) => {
  return (pre << 14) | next;
};

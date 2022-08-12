/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-12 09:25:38                                                  *
 * @LastModifiedDate: 2022-08-12 13:41:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个人被分成数量未知的组。每个人都被标记为一个从 0 到 n - 1 的唯一ID 。

// 给定一个整数数组 groupSizes ，其中 groupSizes[i] 是第 i 个人所在的组的大小。
// 例如，如果 groupSizes[1] = 3 ，则第 1 个人必须位于大小为 3 的组中。

// 返回一个组列表，使每个人 i 都在一个大小为 groupSizes[i] 的组中。

// 每个人应该 恰好只 出现在 一个组 中，并且每个人必须在一个组中。如果有多个答案，返回其中 任何 一个。
// 可以 保证 给定输入 至少有一个 有效的解。

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const hash = new Map();
  let n = groupSizes.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (hash.has(groupSizes[i])) {
      const arr = hash.get(groupSizes[i]);
      arr.push(i);
      hash.set(groupSizes[i], arr);
    } else {
      hash.set(groupSizes[i], [i]);
    }
    const arr = hash.get(groupSizes[i]);
    if (arr.length == groupSizes[i]) {
      ans.push(arr);
      hash.set(groupSizes[i], []);
    }
  }
  return ans;
};

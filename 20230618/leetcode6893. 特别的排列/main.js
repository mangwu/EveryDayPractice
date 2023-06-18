/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-18 10:37:58                                                  *
 * @LastModifiedDate: 2023-06-18 11:28:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，它包含 n 个 互不相同 的正整数。如果 nums 的一个排列满足以下条件，我们称它是一个特别的排列：

// 对于 0 <= i < n - 1 的下标 i ，要么 nums[i] % nums[i+1] == 0 ，要么 nums[i+1] % nums[i] == 0 。
// 请你返回特别排列的总数目，由于答案可能很大，请将它对 109 + 7 取余 后返回。
const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function (nums) {
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
        hash.has(i) ? hash.get(i).push(j) : hash.set(i, [j]);
        hash.has(j) ? hash.get(j).push(i) : hash.set(j, [i]);
      }
    }
  }
  console.log(hash);
  const cache = new Array(2 ** n).fill(0).map(() => new Array(n).fill(-1));
  const last = 2 ** n - 1;
  let res = 0;
  const dfs = (selected, cur) => {
    if (cache[selected][cur] !== -1) {
      return cache[selected][cur];
    }
    if (selected === last) {
      cache[selected][cur] = 1;
      return 1;
    }
    let curRes = 0;
    const next = hash.get(cur);
    if (next) {
      for (const item of next) {
        if (((selected >> item) & 1) === 0) {
          // 未访问
          curRes += dfs(selected | (1 << item), item);
        }
      }
    }
    cache[selected][cur] = curRes % MOD;
    return cache[selected][cur];
  };
  for (let i = 0; i < n; i++) {
    res += dfs(1 << i, i);
    res %= MOD;
  }
  return res;
};

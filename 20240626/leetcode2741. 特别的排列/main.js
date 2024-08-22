/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-26 10:09:02                                                  *
 * @LastModifiedDate: 2024-06-26 11:27:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
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
        hash.has(nums[i]) ? hash.get(nums[i]).push(j) : hash.set(nums[i], [j]);
        hash.has(nums[j]) ? hash.get(nums[j]).push(i) : hash.set(nums[j], [i]);
      }
    }
  }
  const max = 2 ** n - 1;
  const cache = new Array(max + 1).fill(-1).map((v) => new Array(n).fill(-1));
  const dfs = (pre, mask) => {
    if (mask === max) {
      // 遍历完成
      return 1;
    }
    if (cache[mask][pre] !== -1) return cache[mask][pre];
    let res = 0;
    const nxtArr = hash.get(nums[pre]);
    for (const nxt of nxtArr || []) {
      if (((mask >> nxt) & 1) === 0) {
        res += dfs(nxt, mask | (1 << nxt));
      }
    }
    cache[mask][pre] = res % MOD;
    return res;
  };
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += dfs(i, 1 << i);
    ans %= MOD;
  }
  return ans;
};

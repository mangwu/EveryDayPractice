/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 22:48:27                                                  *
 * @LastModifiedDate: 2022-10-29 23:33:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的数组 nums ，它包含若干正整数，表示数轴上你需要摧毁的目标所在的位置。同时给你一个整数 space 。

// 你有一台机器可以摧毁目标。给机器 输入 nums[i] ，这台机器会摧毁所有位置在 nums[i] + c * space 的目标，其中 c 是任意非负整数。你想摧毁 nums 中 尽可能多 的目标。

// 请你返回在摧毁数目最多的前提下，nums[i] 的 最小值 。

/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function (nums, space) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let maxDis = nums[n-1] - nums[0];
  if (maxDis < space) {
    // 返回数量最多的
    let idx = 0;
    let ans = nums[0];
    let max = 1;
    while (idx < n) {
      let cur = 1;
      let curAns = nums[idx];
      while (idx + 1 < n && nums[idx + 1] == nums[idx]) {
        idx++;
        cur++;
      }
      if (cur > max) {
        ans = curAns;
        max = cur;
      }
      idx++;
    }
    return ans;
  }
  // 已经访问过的可以直接跳过
  const set = new Set(new Array(n).fill(0).map((v, i) => i));
  let max = 0;
  let ans = Infinity;
  while (set.size) {
    const arr = Array.from(set);
    let curMax = 0;
    let cur = nums[arr[0]];
    let res = nums[arr[0]];
    for (const item of arr) {
      if (Math.abs(cur - nums[item]) % space == 0) {
        curMax++;
        console.log(nums[item]);
        res = Math.min(nums[item], res);
        set.delete(item);
      }
    }
    console.log(res);
    if (curMax > max) {
      ans = res;
      max = curMax;
    } else if (curMax == max) {
      ans = Math.min(res, ans);
    }
  }
  return ans;
};

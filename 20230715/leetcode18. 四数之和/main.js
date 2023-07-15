/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-15 22:56:36                                                  *
 * @LastModifiedDate: 2023-07-15 23:04:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];
  for (let i = 0; i < n - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      let last = n - 1;
      for (let k = j + 1; k < last; k++) {
        if (k !== j + 1 && nums[k] === nums[k - 1]) continue;
        let sub = target - nums[i] - nums[j] - nums[k];
        while (last > k && nums[last] > sub) {
          last--;
        }
        if (nums[last] === sub && last > k) {
          ans.push([nums[i], nums[j], nums[k], nums[last]]);
        }
      }
    }
  }
  return ans;
};

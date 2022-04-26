/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-26 16:34:46                                                  *
 * @LastModifiedDate: 2022-04-26 16:55:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len < 4) {
    return [];
  }
  if (target > nums[len - 1] + nums[len - 2] + nums[len - 3] + nums[len - 4]) {
    return [];
  }
  if (target < nums[0] + nums[1] + nums[2] + nums[3]) {
    return [];
  }
  const ans = [];
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let right = len - 1;
      let k = j + 1;
      while (k < right) {
        if (k > j + 1 && nums[k] == nums[k - 1]) {
          k++;
          continue;
        }
        let sum = nums[i] + nums[j] + nums[k] + nums[right];
        if (sum == target) {
          ans.push([nums[i], nums[j], nums[k], nums[right]]);
          k++;
        } else if (sum > target) {
          let r = right - 1;
          // right需要左移
          while (nums[i] + nums[j] + nums[k] + nums[r] > target && r > k) {
            r--;
          }
          right = r;
        } else {
          // k需要右移
          let k0 = k + 1;
          while (
            nums[i] + nums[j] + nums[k0] + nums[right] < target &&
            right > k0
          ) {
            k0++;
          }
          k = k0;
        }
      }
    }
  }
  console.log(ans);
  return ans;
};

fourSum([1, 0, -1, 0, 1, 5, 4, 1, 4, 4, 2, 5, -1, -2, -3, -5, -5, -5], 0);
